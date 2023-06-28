import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";

const MainPage = () => {
  return (
    <PageWrapper>
      <Map />
      <SearchTab />
    </PageWrapper>
  );
};

export default MainPage;