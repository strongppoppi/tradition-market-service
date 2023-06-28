import React, { useState, useEffect, useRef, } from 'react';
import { styled } from "styled-components"
import MarketMarker from "./MarketMarker";

const Map = () => {
  const [naverMap, setNaverMap] = useState(null);   //네이버 지도 instance(?)
  const [markers, setMarkers] = useState([]);     //현재 naverMap에 추가된 marker들 들어있는 배열
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도 렌더링 시, 최초 장소 표시
    // 영천시장 좌표: 37.570690, 126.961031
    const location = new naver.maps.LatLng(37.570690, 126.961031);

    // 네이버 지도 옵션 선택
    const mapOptions = {
      center: location,
      zoom: 16,
    };

    //naverMap 생성 완료 -> 리렌더링하면서 MarketMarker에 인자로 전달
    setNaverMap(new naver.maps.Map(mapElement.current, mapOptions));
    console.log('naverMap created');
  }, []);

  return (
    <Wrapper>
      <MapContainer ref={mapElement}/>
      <MarketMarker naverMap={naverMap} markers={markers} setMarkers={setMarkers}/>
    </Wrapper>
  );
};

export default Map;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;