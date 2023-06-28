import React, { useState } from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Map from "../components/Map/Map";
import SearchTab from "../components/Search/SearchTab";
import BottomTab from "../components/BottomTab/BottomTab";
import MarketInfoModal from "../components/MarketModal/MarketInfoModal";


const MapPage = () => {
  const [naverMap, setNaverMap] = useState(null);   //네이버 지도 instance(?)
  const [markers, setMarkers] = useState([]);     //현재 naverMap에 추가된 marker들 들어있는 배열
  const [selectedMarket, setSelectedMarket] = useState(null);   //선택된 시장(마커)의 key(index)
  const [myCurrentLocation, setMyCurrentLocation] = useState({}); // 내 위치 정보 불러오기

  return (
    <PageWrapper>
      <Map
        naverMap={naverMap}
        markers={markers}
        setMarkers={setMarkers}
        setNaverMap={setNaverMap}
        setSelectedMarket={setSelectedMarket}
      />
      <SearchTab
        naverMap={naverMap}
        markers={markers}
        setMarkers={setMarkers}
        myCurrentLocation={myCurrentLocation}
        setMyCurrentLocation={setMyCurrentLocation}
        setSelectedMarket={setSelectedMarket}
      />
      <BottomTab
        currentPath="map"
      />
      <MarketInfoModal marketIndex={selectedMarket} />
    </PageWrapper>
  );
};

export default MapPage;