import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import BottomTab from "../components/BottomTab/BottomTab";
import MarketInfoCard from "../components/MarketInfo/MarketInfoCard";

const MapPage = () => {

  return (
    <PageWrapper>
      <SearchTab />
      <Map />
      <BottomTab
        currentPath="map"
      />
      {/* <MarketInfoCard /> */}
    </PageWrapper>
  );
};

export default MapPage;