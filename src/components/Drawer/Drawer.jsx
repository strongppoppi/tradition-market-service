import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';

const Drawer = ({ content }) => {
    const [visibleHeight, setVisibleHeight] = useState(70);
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const startDragY = useRef(0);
    const windowHeight = window.innerHeight;


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
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
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
