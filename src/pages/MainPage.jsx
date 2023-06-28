import React, { useState } from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import MarketInfoCard from "../components/MarketInfo/MarketInfoCard";
import MarketDataLoader from "../components/MarketInfo/MarketDataLoader";

const MainPage = () => {
  const [selectedMarket, setSelectedMarket] = useState(null);   //선택된 시장(마커)의 key(index)
  const [marketData, setMarketData] = useState([]);         //API로 불러온 시장 데이터

  console.log("MainPage의 selectedMarket =", selectedMarket);

  return (
    <PageWrapper>
      <Map setSelectedMarket={setSelectedMarket} />
      <SearchTab />
      <MarketInfoCard market={selectedMarket} marketData={marketData} />
      {/* <MarketDataLoader marketData={marketData} setMarketData={setMarketData} /> */}
    </PageWrapper>
  );
};

export default MainPage;