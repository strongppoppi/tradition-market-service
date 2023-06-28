import React from 'react';
import { useNavigate } from "react-router";
import { styled } from "styled-components";

const LongButton = ({text, navigationPath}) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(navigationPath);
  }

  return (
    <Wrapper>
      <ButtonContainer
        onClick={handleButton}
      >
        <ButtonText>
          {text}
        </ButtonText>
      </ButtonContainer>
    </Wrapper>
  );
};

export default LongButton;

// styled

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
`;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ButtonText = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;