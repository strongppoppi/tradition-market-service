import React from "react";

import ScrollPageWrapper from "../components/PageWrapper/ScrollPageWrapper";
import Margin from "../components/Common/Margin";
import HomeHeader from "../components/Home/HomeHeader";
import ContentHeader from "../components/Home/ContentHeader";
import Festival from "../components/Festival/Festival";
import EditorContentList from "../components/EditorContent/EditorContentList";
import MarketTipList from "../components/EditorContent/MarketTipList";

const HomePage = () => {
  return (
    <ScrollPageWrapper>
      <HomeHeader />
      <ContentHeader title="오늘의 인기 상점" subTitle="나도 인기 상품 즐겨보기"/>
      <EditorContentList />
      <ContentHeader title="영천 시장 즐기기" subTitle="시장을 더 재밌게 즐기는 방법들"/>
      <MarketTipList />
      <ContentHeader title="서대문구 축제 소식" subTitle="우리 동네의 즐거운 일들"/>
      <Festival />
    </ScrollPageWrapper>
  );
};

export default HomePage;
