import React from 'react';
import { styled } from "styled-components";

import Margin from "../Common/Margin";

const SplashBody = () => {
  return (
    <Wrapper>
      <Margin size="80px"/>
      <Title>
        알려지지 않은 시장 속 보물들
      </Title>
      <Title>
        찾으러 가볼까요?
      </Title>
    </Wrapper>
  );
};

export default SplashBody;

// styled
const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 10px 15px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
`;