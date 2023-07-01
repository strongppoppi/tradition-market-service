import React from "react";
import { styled } from "styled-components";

const MarketTipList = () => {
  return (
    <Wrapper>
      <ListContainer>
        <ContentContainer>
          <ContentImage />
          <ContentText>
            영천시장에서 무더위 날리는 방법!
          </ContentText>
        </ContentContainer>
        <ContentContainer>
          <ContentImage />
          <ContentText>
            영천시장에서 무더위 날리는 방법!
          </ContentText>
        </ContentContainer>
      </ListContainer>
      <ListContainer>
        <ContentContainer>
          <ContentImage />
          <ContentText>
            영천시장에서 무더위 날리는 방법!
          </ContentText>
        </ContentContainer>
        <ContentContainer>
          <ContentImage />
          <ContentText>
            영천시장에서 무더위 날리는 방법!
          </ContentText>
        </ContentContainer>
      </ListContainer>
    </Wrapper>
  );
};

export default MarketTipList;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 1rem;
  margin-bottom: 45px;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const ContentImage = styled.div`
  width: 170px;
  height: 170px;
  background-color: #ff7455;
  border-radius: 8px;
`;

const ContentText = styled.h3`
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.3px;
`;
