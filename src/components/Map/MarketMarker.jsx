import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import axios from "axios";
import marketsLocation from "../../markets.json";

const MarketMarker = ( {naverMap, setMarkers} ) => {
  const address = "서울특별시";
  const encodedAddress = encodeURIComponent(address);

  const MARKET_KEY = process.env.REACT_APP_MARKET_ID;
  const MARKET_API_URL = `https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?serviceKey=${MARKET_KEY}&page=1&perPage=1439&returnType=json`
  const MARKET_STANDARD_API_URL = `http://api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=1&numOfRows=1500&type=json`;
  const { naver } = window;
  
  //geolocation - 현재 위도&경도 (예정)
  const location = [37.570690, 126.961031];

  useEffect(() => {
    if (naverMap) {
      addMarkers(marketsLocation);  //markets.json에서 latitude, longitude 가져와서 마커 추가 (API 사용X)
      /*
      마커 2번으로 나눠서 추가하는 코드 (시장정보 불러올 때 참고)
      const [loadFirst, loadLater] = filterMarketsByDistance(location);
      addMarkers(loadFirst);
      console.log('markers(loadFirst) loaded');
      addMarkers(loadLater);
      console.log('markers(loadLater) loaded');
      */
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

  //myLocation: 사용자 현재 위치 (geolocation)
  //사용자 현재 위치 기준으로 0.1 이내 market 객체 -> loadFirst / 나머지 -> loadLater
  const filterMarketsByDistance = (myLocation) => {
    var loadFirst = [];
    var loadLater = [];
    marketsLocation.forEach(market => {
      var distance = getDistance(myLocation, [Number(market.latitude), Number(market.longitude)]);
      if (distance < 0.1) loadFirst.push(market);
      else loadLater.push(market);
    })
    return [loadFirst, loadLater];
  };

  //두 지점의 위도&경도([lat1, lon1], [lat2, lon2]) 받아서 거리 계산해주는 함수 
  const getDistance = (location1, location2) => {
    var lat = Math.abs(location1[0] - location2[0]);
    var lon = Math.abs(location1[1] - location2[1]);
    return Math.sqrt(lat*lat + lon*lon);
  };

  //Open API 시장 데이터
  const loadData = async () => {
    try {
      await axios
        .get(MARKET_STANDARD_API_URL)
        .then((res) => {
          const jsonRes = res.data;
          return jsonRes.response.body.items;
        })
        .then(items => {
          console.log(items);
          // addMarkers(items);
        })
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <p>res</p>
    </>
  );
};

export default MarketMarker;

// styled
