import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import marketsLocation from "../../markets.json";

const MarketMarker = ({ naverMap, markers, setMarkers }) => {
  const { naver } = window;

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