import React from "react";
import { useNavigation } from "react-router";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import BottomTab from "../components/BottomTab/BottomTab";
import MarketInfoCard from "../components/MarketInfo/MarketInfoCard";

const MapPage = () => {
  const navigate = useNavigation();

  return (
    <PageWrapper>
      <SearchTab />
      <Map />
      <BottomTab
        currentPath="map"
        navigate={navigate}
      />
      {/* <MarketInfoCard /> */}
    </PageWrapper>
  );
};

export default MapPage;