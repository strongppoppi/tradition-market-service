import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';

const Drawer = ({ content }) => {
    const [visibleHeight, setVisibleHeight] = useState(70);
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const startDragY = useRef(0);
    const windowHeight = window.innerHeight;

    // 클릭 시 드로어 열림/닫힘
    const handleClick = () => {
        if (visibleHeight == windowHeight) {
            changeHeight(70);
        } else if (visibleHeight == 70) {
            changeHeight(windowHeight);
        }
    }

    // PC 클릭 핸들러
    const handleMouseDown = (event) => {
        setIsDragging(true);
        startDragY.current = event.clientY;
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const offsetY = event.clientY - startDragY.current;
            setVisibleHeight(visibleHeight - offsetY);
            startDragY.current = event.clientY;
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            if (visibleHeight > windowHeight / 2) {
                changeHeight(windowHeight);
            } else {
                changeHeight(70);
            }
        }
        setIsDragging(false);
    };

    // 모바일 터치 핸들러
    const handleTouchStart = (event) => {
        setIsDragging(true);
        startDragY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
        if (isDragging) {
            const offsetY = event.touches[0].clientY - startDragY.current;
            setVisibleHeight(visibleHeight - offsetY);
            startDragY.current = event.touches[0].clientY;
        }
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            if (visibleHeight > windowHeight / 2) {
                changeHeight(windowHeight);
            } else {
                changeHeight(70);
            }
        }
        setIsDragging(false);
    };

    // 드로어에 애니메이션 효과 적용
    const changeHeight = (height) => {
        // 애니메이션 효과를 추가하기 위해 transition 속성 추가
        dragRef.current.style.transition = "height 0.3s ease";

        const intervalId = setInterval(() => {
            setVisibleHeight(height);
        }, 20);

        setTimeout(() => {
            clearInterval(intervalId);
            // 애니메이션 종료 후에 다시 transition 속성 추가
            dragRef.current.style.transition = "";
        }, 300);
    }


    return (
        <Wrapper ref={dragRef} style={{ height: `${visibleHeight}px` }}>
            <HandleContainer
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <Handle />
            </HandleContainer>
            {content}
        </Wrapper>
    );
};

export default Drawer;

//styled
const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const HandleContainer = styled.div`
    width: 70%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;
`;

const Handle = styled.div`
  width: 40%;
  height: 5px;
  margin: 10px;
  border-radius: 5px;
  background-color: grey;
  cursor: grab;
`;
