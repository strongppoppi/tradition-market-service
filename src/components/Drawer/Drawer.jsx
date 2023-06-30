import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';

const Drawer = ({ content }) => {
    const [visibleHeight, setVisibleHeight] = useState(100);
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const startDragY = useRef(0);


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
        setIsDragging(false);
    };

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
  overflow: auto;
`;

const HandleContainer = styled.div`
    width: 70%;
    height: 25px;
    display: flex;
    justify-content: center;
    cursor: grab;
`;

const Handle = styled.div`
  width: 40%;
  height: 5px;
  border-radius: 5px;
  margin: 10px;
  background-color: grey;
  cursor: grab;
`;
