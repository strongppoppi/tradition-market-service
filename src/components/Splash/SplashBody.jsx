import React, { useEffect } from 'react';
import { styled, keyframes } from "styled-components";
import { useNavigate } from 'react-router';

import Margin from "../Common/Margin";

const SplashBody = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <Wrapper>
      <Slogan>
        전통시장이 핫플이 되는 매직!
      </Slogan>
      <LogoImage src={require("../../assets/brand/logo.png")} />
      <Margin size="4rem" />
    </Wrapper>
  );
};

export default SplashBody;

// keyframes
const popUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  50% {
    opacity: 1;
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
  }
`;

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// styled
const LogoImage = styled.img`
  width: 100%;
  height: 7.75rem;
  object-fit: scale-down;
  transform: scale(0);
  animation: ${popUp} 0.25s 1.25s linear forwards;
`;

const Slogan = styled.h2`
  font-size: 1.0625rem;
  font-weight: 500;
  line-height: 1.0625rem;
  letter-spacing: -0.34px;
  color: #fff;
  opacity: 0;
  animation: ${opacity} 0.5s 0.5s linear forwards;
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FF7455;
`;