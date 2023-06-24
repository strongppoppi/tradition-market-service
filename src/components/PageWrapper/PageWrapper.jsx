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
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;