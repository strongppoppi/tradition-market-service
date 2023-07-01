import React from 'react';
import { styled } from "styled-components";

import BottomTab from '../BottomTab/BottomTab';

const ScrollPageWrapper = ({ children }) => {
  return (
    <Background>
      <Wrapper>
        {children}
      </Wrapper>
      <BottomTab currentPath="home" />
    </Background>
  );
};

export default ScrollPageWrapper;

// styled
const Background = styled.div`
  position: relative;
  background-color: #fff;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;