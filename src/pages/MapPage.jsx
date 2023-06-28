import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import BottomTab from "../components/BottomTab/BottomTab";
import MarketInfoCard from "../components/MarketInfo/MarketInfoCard";


const MapPage = () => {
  const [selectedMarket, setSelectedMarket] = useState(null);   //선택된 시장(마커)의 key(index)

  return (
    <PageWrapper>
      <SearchTab />
      <Map setSelectedMarket={setSelectedMarket} />
      <BottomTab
        currentPath="map"
      />
      <MarketInfoCard marketIndex={selectedMarket} />
    </PageWrapper>
  );
};

export default MapPage;