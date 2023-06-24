import React from 'react';
import { styled } from "styled-components";

const Header = ({title}) => {
  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
    </Wrapper>
  );
};

export default Header;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
`;
