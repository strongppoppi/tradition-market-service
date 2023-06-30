import React from 'react';
import { styled } from "styled-components";
import { useNavigate } from "react-router";

const BottomTab = ({currentPath}) => {
  const navigate = useNavigate(); // 페이지 네비게이트

  // 탭 버튼 클릭 시
  const handleButton = (path) => {
    navigate(path);
  };

  // 현재 경로에 따른 탭 버튼 UI 변화
  let homeComponent;
  let mapComponent;
  let settingComponent;

  switch (currentPath) {
    case "home":
      homeComponent=(
        <TabButton clicked={true}>
          <IconImage src={require("../../assets/brand/homeIcon_white.png")} />
        </TabButton>
      )
      mapComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/mapIcon_grey.png")} />
        </TabButton>
      )
      settingComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/settingIcon_grey.png")} />
        </TabButton>
      )
    break;
    case "map":
      homeComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/homeIcon_grey.png")} />
        </TabButton>
      )
      mapComponent=(
        <TabButton clicked={true}>
          <IconImage src={require("../../assets/brand/mapIcon_white.png")} />
        </TabButton>
      )
      settingComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/settingIcon_grey.png")} />
        </TabButton>
      )
    break;
    case "user":
      homeComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/homeIcon_white.png")} />
        </TabButton>
      )
      mapComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/homeIcon_white.png")} />
        </TabButton>
      )
      settingComponent=(
        <TabButton clicked={true}>
          <IconImage src={require("../../assets/brand/homeIcon_white.png")} />
        </TabButton>
      )
    break;
    default:
      homeComponent=(
        <TabButton clicked={true}>
          <IconImage src={require("../../assets/brand/homeIcon_white.png")} />
        </TabButton>
      )
      mapComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/mapIcon_grey.png")} />
        </TabButton>
      )
      settingComponent=(
        <TabButton clicked={false}>
          <IconImage src={require("../../assets/brand/settingIcon_grey.png")} />
        </TabButton>
      )
    break;
  }

  return (
    <Wrapper>
      <TabContainer
        onClick={() => handleButton("/home")}
      >
        {homeComponent}
        <TabText tabSelected={currentPath==="home"}>홈</TabText>
      </TabContainer>
      <TabContainer
        onClick={() => handleButton("/map")}
      >
        {mapComponent}
        <TabText tabSelected={currentPath==="map"}>시장찾기</TabText>
      </TabContainer>
      <TabContainer
        onClick={() => handleButton("/mypage")}
      >
        {settingComponent}
        <TabText tabSelected={currentPath==="user"}>설정</TabText>
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
  border-top: 1px solid #E9EBF0;
  padding-bottom: 40px;
  padding-top: 10px;
`;

const TabContainer = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const TabButton = styled.div`
  width: 57px;
  height: 34px;
  border-radius: 10px;
  background-color: ${(props) => props.clicked ? "#FF7455" : "#fff" };
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`; 

const TabText = styled.h3`
  padding-top: 5px;
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.26px;
  color: #111213;
  color: ${(props) => props.tabSelected ? "#111213" : "#B0B8C1" };
`;