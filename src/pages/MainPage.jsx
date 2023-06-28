import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import MarketInfoCard from "../components/MarketInfo/MarketInfoCard";

const MainPage = () => {
  return (
    <PageWrapper>
      <Map />
      <SearchTab />
      <MarketInfoCard />
    </PageWrapper>
  );
};

export default MainPage;