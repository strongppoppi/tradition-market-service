import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";

const MainPage = () => {
  return (
    <PageWrapper>
      <Header title="메인 페이지"/>
      <Map />
    </PageWrapper>
  );
};

export default MainPage;