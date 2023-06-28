import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import marketsLocation from "../../markets.json";

<<<<<<< main
const MarketMarker = ({ naverMap, markers, setMarkers }) => {
  const { naver } = window;
=======
const MarketMarker = ( {naverMap, setMarkers} ) => {
  const address = "서울특별시";
  const encodedAddress = encodeURIComponent(address);

  const MARKET_KEY = process.env.REACT_APP_MARKET_ID;
  const MARKET_API_URL = `https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?serviceKey=${MARKET_KEY}&page=1&perPage=1439&returnType=json`
  const MARKET_STANDARD_API_URL = `http://api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=1&numOfRows=1500&type=json`;
  const { naver } = window;
  
  //geolocation - 현재 위도&경도 (예정)
  const location = [37.570690, 126.961031];
>>>>>>> main

  useEffect(() => {
    if (naverMap) {
      addMarkers(marketsLocation);  //markets.json에서 latitude, longitude 가져와서 마커 추가 (API 사용X)
    }
  }, [naverMap]);

  //items: latitude, longitude 속성을 가진 market 객체들을 담은 배열
  const addMarkers = (items) => {
    var newMarkers = [...markers];   //기존 마커 + 새로 추가할 마커 배열
    items.forEach(item => {
      //마커 생성 및 추가
      newMarkers.push(new naver.maps.Marker({
        position: new naver.maps.LatLng(item.latitude, item.longitude),
        map: naverMap,
      }))
    });
    setMarkers(newMarkers);  //Map 컴포넌트의 markers 상태 변경 (+리렌더링)
  };


  return (
    <>
      <p>res</p>
    </>
  );
};

export default MarketMarker;

// styled