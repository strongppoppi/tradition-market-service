import React, { useState, useEffect, useRef, } from 'react';
import { styled } from "styled-components";
import marketsLocation from "../../markets.json";


const MarketMap = ({ marketIndex }) => {
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도 렌더링 시, 최초 장소 표시 (선택한 시장)
        const location = new naver.maps.LatLng(marketsLocation[marketIndex].latitude, marketsLocation[marketIndex].longitude);

        // 네이버 지도 옵션 선택
        const mapOptions = {
            center: location,
            zoom: 16,
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT
            },
            mapDataControl: false,
            scaleControl: false,
        };

        // 네이버 지도 생성
        var naverMap = new naver.maps.Map(mapElement.current, mapOptions);

        var marker = new naver.maps.Marker({
            position: location,
            map: naverMap,
            icon: {
                url: 'marker.png',
                size: new naver.maps.Size(42, 52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
            }
        });
    }, []);

    return (
        <Wrapper>
            <MapContainer ref={mapElement} />
        </Wrapper>
    );
};

export default MarketMap;

// styled
const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100%;
  flex: 1;
`;