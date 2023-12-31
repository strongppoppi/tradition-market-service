import React from 'react';
import { styled } from "styled-components";

const PageWrapper = ({ children }) => {
  return (
    <Background>
      <Wrapper>
        {children}
      </Wrapper>
    </Background>
  );
};

export default PageWrapper;

// styled
const Background = styled.div`
  background-color: #fff;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;