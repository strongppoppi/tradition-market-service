import React from 'react';
import { styled } from "styled-components";

import Margin from "../Common/Margin";

const OnBoarding = () => {

  return (
    <Wrapper>
      <Margin
        size="80px"
      />
      <Title>
        시장가장 시작하기
      </Title>
      <Margin
        size="80px"
      />
      <ContentContainer>
        <ImageContainer />
        <TextContainer>
          <Bold>지도</Bold>
          <Desc>이게 무슨 기능이냐면 이렇게 저렇게 그래서 이건 어쩌고 저쩌고...</Desc>
        </TextContainer>
      </ContentContainer>
      <Margin
        size="60px"
      />
      <ContentContainer>
        <ImageContainer />
        <TextContainer>
          <Bold>친해지기</Bold>
          <Desc>이게 무슨 기능이냐면 이렇게 저렇게 그래서 이건 어쩌고 저쩌고...</Desc>
        </TextContainer>
      </ContentContainer>
      <Margin
        size="60px"
      />
      <ContentContainer>
        <ImageContainer />
        <TextContainer>
          <Bold>인기 점포</Bold>
          <Desc>이게 무슨 기능이냐면 이렇게 저렇게 그래서 이건 어쩌고 저쩌고...</Desc>
        </TextContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default OnBoarding;

// styled
const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 15px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 35px;
  gap: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60px;
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #D9D9D9;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bold = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;