import React from "react";
import { styled } from "styled-components";

const HomeHeader = () => {
  return (
    <Wrapper>
      <VillageText>
        영천동
      </VillageText>
      <ArrowButton>
        <IconImage src={require("../../assets/icons/villageArrow.png")} />
      </ArrowButton>
    </Wrapper>
  );
};

export default HomeHeader;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 15px 5px;
  margin: 0 15px;
  border-bottom: 1px solid #DADCE2;
  gap: 3px;
  margin-bottom: 20px;
`;

const VillageText = styled.h2`
  color: #111213;  
  font-size: 1.3125rem;
  font-weight: 500;
  line-height: 1.3125rem;
  letter-spacing: -0.42px;
`;

const ArrowButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #fff;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;