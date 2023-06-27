import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import axios from "axios";

const MarketMarker = ( {naverMap, setMarkers} ) => {
  const MARKET_KEY = process.env.REACT_APP_MARKET_ID;
  const MARKET_API_URL = `https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?serviceKey=${MARKET_KEY}&page=1&perPage=1439&returnType=json`
  const MARKET_STANDARD_API_URL = `http://api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=1&numOfRows=1521&type=json`;
  const { naver } = window;
  var markers = []; //생성한 마커 담는 배열

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
          items.forEach(item => {
            //마커 생성&추가 및 배열에 담기
            markers.push(new naver.maps.Marker({
              position: new naver.maps.LatLng(item.latitude, item.longitude),
              map: naverMap,
            }))
          });
          setMarkers(markers);  //Map 컴포넌트의 markers 상태 변경 (+리렌더링)
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (naverMap) loadData();
  }, [loadData]);

  return (
    <>
      <p>res</p>
    </>
  );
};

export default MarketMarker;

// styled
