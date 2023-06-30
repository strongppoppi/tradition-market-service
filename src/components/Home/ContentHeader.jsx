import React from "react";
import { styled } from "styled-components";

const ContentHeader = ({title, subTitle, path}) => {
  return (
    <Wrapper>
      <HeaderSection>
        <MainText>
          {title}
        </MainText>
        <DetailTab>
          <DetailText>
            더보기
          </DetailText>
          <DetailImage src={require("../../assets/icons/rightArrow.png")} />
        </DetailTab>
      </HeaderSection>
      <SubText>
        {subTitle}
      </SubText>
    </Wrapper>
  );
};

export default ContentHeader;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding-left: 20px;
  padding-right: 15px;
  gap: 7px;
`;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailTab = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const DetailText = styled.h4`
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.1875rem;
  letter-spacing: -0.3px;
  color: #8F95A2;
`;

const DetailImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

const MainText = styled.h2`
  font-size: 1.5625rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: -0.5px;
  color: #111213;
`;

const SubText = styled.h3`
  color: #363C47;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 0.8125rem;
  letter-spacing: -0.26px;
`;