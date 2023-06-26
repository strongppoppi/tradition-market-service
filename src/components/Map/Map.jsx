import React, { useState, useEffect, useRef, } from 'react';
import { styled } from "styled-components"
import MarketMarker from "./MarketMarker";

const Map = () => {
  const [data, setData] = useState();
  const mapElement = useRef(null);
  const { naver } = window;

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
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 지도상에 핀 표시 할 부분
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    // 지도 렌더링 시, 최초 장소 표시
    // 영천시장 좌표: 37.570690, 126.961031
    const location = new naver.maps.LatLng(37.570690, 126.961031);

    // 네이버 지도 옵션 선택
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT,
      },
    };

    const naverMap = new naver.maps.Map(mapElement.current, mapOptions);

    if (data) {
      data.forEach(item => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(item.latitude, item.longitude),
          map: naverMap,
        });
      });
    };

  }, [data]);


  return (
    <Wrapper>
      <MapContainer ref={mapElement}/>
      <MarketMarker data={data} setData={setData}/>
    </Wrapper>
  );
};

export default Map;

// styled
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;