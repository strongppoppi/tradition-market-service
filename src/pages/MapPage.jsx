import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import BottomTab from "../components/BottomTab/BottomTab";
import MarketInfoCard from "../components/MarketInfo/MarketInfoCard";
import MarketDataLoader from "../components/MarketInfo/MarketDataLoader";

const MapPage = () => {
  const [selectedMarket, setSelectedMarket] = useState(null);   //선택된 시장(마커)의 key(index)
  const [marketData, setMarketData] = useState([]);         //API로 불러온 시장 데이터

  return (
    <PageWrapper>
      <SearchTab />
      <Map setSelectedMarket={setSelectedMarket} />
      <BottomTab
        currentPath="map"
      />
      <MarketInfoCard market={selectedMarket} marketData={marketData} />
    </PageWrapper>
  );
};

export default MapPage;