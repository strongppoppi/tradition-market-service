import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import marketsLocation from "../../markets.json";

const MarketMarker = ({ naverMap, markers, setMarkers, setSelectedMarket }) => {
  const { naver } = window;

  useEffect(() => {
    if (naverMap) {
      addMarkers(marketsLocation);  //markets.json에서 latitude, longitude 가져와서 마커 추가 (API 사용X)
    }
  }, [naverMap]);

  //items: latitude, longitude 속성을 가진 market 객체들을 담은 배열
  const addMarkers = (items) => {
    console.log("addMarkers");
    var newMarkers = [...markers];   //기존 마커 + 새로 추가할 마커 배열
    for (var i = 0; i < items.length; i++) {
      //마커 생성 및 추가
      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(items[i].latitude, items[i].longitude),
        map: naverMap,
      });
      //마커 클릭 시 MainPage의 selectedMarket에 선택된 시장의 key 저장
      naver.maps.Event.addListener(marker, 'click', getClickHandler(i));
      newMarkers.push(marker);
    }
    setMarkers(newMarkers);  //Map 컴포넌트의 markers 상태 변경 (+리렌더링)
  };

  const getClickHandler = (i) => {
    return function () {
      console.log("marker clicked: ", i);
      setSelectedMarket(i);
    }
  }

  return (
    <>
      <p>res</p>
    </>
  );
};

export default MarketMarker;

// styled