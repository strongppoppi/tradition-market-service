import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Margin from "../components/Common/Margin";
import HomeHeader from "../components/Home/HomeHeader";
import ContentHeader from "../components/Home/ContentHeader";
import Festival from "../components/Festival/Festival";
import BottomTab from "../components/BottomTab/BottomTab";

const HomePage = () => {
  return (
    <PageWrapper>
      <HomeHeader />
      <Margin size="20px" />
      <Margin size="20px" />
      <Margin size="20px" />
      <ContentHeader title="오늘의 인기 상점 되냐고" subTitle="나도 인기 상품 즐겨보기"/>
      <Margin size="20px" />
      <ContentHeader title="영천 시장 즐기기" subTitle="시장을 더 재밌게 즐기는 방법들"/>
      <Margin size="20px" />
      <ContentHeader title="서대문구 축제 소식" subTitle="우리 동네의 즐거운 일들"/>
      <Margin size="20px" />
      <Margin size="20px" />
      <Margin size="20px" />
      <Festival />
      <BottomTab
        currentPath="home"
      />
    </PageWrapper>
  );
};

export default HomePage;