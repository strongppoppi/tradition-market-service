import React from 'react';
import { styled } from "styled-components";

const BottomTab = () => {
  return (
    <Wrapper>
      <TabContainer>

      </TabContainer>
    </Wrapper>
  );
};

export default BottomTab;

// styled
const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-bottom: 40px;
  border: 1px solid red;
`;

const TabContainer = styled.div`
  flex: 1;
  border: 1px solid blue;
`;