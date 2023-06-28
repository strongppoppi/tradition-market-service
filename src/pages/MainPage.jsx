import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import BottomTab from "../components/BottomTab/BottomTab";

const MainPage = () => {
  return (
    <PageWrapper>
      <Map />
      <SearchTab />
      <BottomTab />
    </PageWrapper>
  );
};

export default MainPage;