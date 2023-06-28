import React from 'react';
import { styled } from "styled-components";

const BottomTab = ({currentPath}) => {

  const handleButton = () => {
    
  };

  return (
    <Wrapper>
      <TabContainer>
        <TabButton></TabButton>
      </TabContainer>
      <TabContainer>
        <TabButton></TabButton>
      </TabContainer>
      <TabContainer>
        <TabButton></TabButton>
      </TabContainer>
    </Wrapper>
  );
};

export default BottomTab;

// styled
const Wrapper = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #838383;
  padding-bottom: 40px;
  padding-top: 10px;
`;

const TabContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TabButton = styled.button`
  width: 46px;
  height: 46px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;
