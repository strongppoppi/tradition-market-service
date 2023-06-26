import React, { useEffect, useRef } from 'react';
import { styled } from "styled-components";
import axios from "axios";

const MarketMarker = ( {data, setData} ) => {
  const MARKET_KEY = process.env.REACT_APP_MARKET_ID;
  const MARKET_API_URL = `https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?serviceKey=${MARKET_KEY}&page=1&perPage=1439&returnType=json`
  const MARKET_STANDARD_API_URL = `http://api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=1&numOfRows=100&type=json`;

  const loadData = async () => {
    try {
      await axios
        .get(MARKET_STANDARD_API_URL)
        .then((res) => {
          const jsonRes = res.data;
          console.log(jsonRes);
          return jsonRes.response.body.items;
        })
        .then(data => {
          console.log(data);
          setData(data);
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!data) loadData();
  }, [loadData]);

  return (
    <>
      <p>res</p>
    </>
  );
};

export default MarketMarker;

// styled
