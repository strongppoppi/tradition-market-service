import React, { useEffect } from 'react';
import axios from "axios";


const MarketDataLoader = ({ marketIndex, setMarketData, setDataLoaded }) => {
  const MARKET_KEY = process.env.REACT_APP_MARKET_ID;
  const MARKET_API_URL = `//api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?serviceKey=${MARKET_KEY}&page=1&perPage=1439&returnType=json`;
  const MARKET_STANDARD_API_URL = `//api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=1&numOfRows=1521&type=json`;

  const generateApiUrl = (marketIndex) => `https://proxy.cors.sh/http://api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=${marketIndex + 1}&numOfRows=1&type=json`;

  const loadData = async (apiUrl) => {
    try {
      await axios
        .get(apiUrl, {
          headers: {
            'x-cors-api-key': 'temp_8897981b5a3c25edbe0d8d042cf0b42d'
          }
        })
        .then((res) => {
          return res.data.response.body.items[0];
        })
        .then(item => {  //item: 시장 객체
          console.log(item);
          setMarketData(item);
          setDataLoaded(true);
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData(generateApiUrl(marketIndex));
  }, [loadData]);

  return (
    <>
      <p>Loading Market Information...</p>
    </>
  )
};

export default MarketDataLoader;