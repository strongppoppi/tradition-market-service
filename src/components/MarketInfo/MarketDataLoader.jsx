import React, { useEffect } from 'react';
import axios from "axios";
import marketsLocation from "../../markets.json";

/*
시장명 기준으로 데이터 가져오려고 했는데 시장명 중복 있음...
공공데이터 불러올 땐 그냥 중복되는 것까지 불러와도 큰 문제는 없음
파베에서는 시장명 key로 쓰지 말고 key값 별도로 부여해야 할 듯 (0000~1520)
마커에도 클릭이벤트핸들러 추가하려면 key 필요할 것 같은데.. 아예 markets.json에 넣을까
  markers는 배열의 index가 key(0~1520). But loadFirst/loadLater을 시장명으로 불러오면 순서가 바뀌니까 대응하는 marker에 전달 불가능
  markets.json에 key 추가하고, filter할 때 marketsLocation에서 {key: market.key, marketName: market.mrktNm}를 loadFirst/loadLater에 push
  그러면 loadData에서 불러온 데이터 어딘가에 저장할 때 key도 같이 저장되고, marker 이벤트 추가할 때 사용 가능
  (파베에서 불러오는 데이터(사진 등)도 같은 key값으로 불러올 수 있음)
=> 일단 markets.json에 key 추가할 것
*/

const MarketDataLoader = ({ marketData, setMarketData }) => {
  const MARKET_KEY = process.env.REACT_APP_MARKET_ID;
  const MARKET_API_URL = `https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?serviceKey=${MARKET_KEY}&page=1&perPage=1439&returnType=json`;
  const MARKET_STANDARD_API_URL = `http://api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=1&numOfRows=1521&type=json`;
  const generateApiUrl = (marketName) => `http://api.data.go.kr/openapi/tn_pubr_public_trdit_mrkt_api?serviceKey=${MARKET_KEY}&pageNo=1&numOfRows=1521&mrktNm=${marketName}&type=json`;

  //geolocation - 현재 위도&경도 (예정)
  const location = [37.570690, 126.961031];

  //myLocation: 사용자 현재 위치 (geolocation)
  //사용자 현재 위치 기준으로 0.1 이내 marketName -> loadFirst / 나머지 -> loadLater
  const filterMarketsByDistance = (myLocation) => {
    var loadFirst = [];
    var loadLater = [];
    marketsLocation.forEach(market => {
      var distance = getDistance(myLocation, [Number(market.latitude), Number(market.longitude)]);
      if (distance < 0.1) loadFirst.push(market.mrktNm);
      else loadLater.push(market.mrktNm);
    })
    return [loadFirst, loadLater];
  };

  //두 지점의 위도&경도([lat1, lon1], [lat2, lon2]) 받아서 거리 계산해주는 함수 
  const getDistance = (location1, location2) => {
    var lat = location1[0] - location2[0];
    var lon = location1[1] - location2[1];
    return Math.sqrt(lat * lat + lon * lon);
  };

  const loadData = async (apiUrl) => {
    try {
      await axios
        .get(apiUrl)
        .then((res) => {
          return res.data.response.body.items;
        })
        .then(items => {  //items: 시장 객체 담은 배열
          const newMarketData = [...marketData];
          newMarketData.push(items);
          setMarketData(newMarketData);
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const [loadFirst, loadLater] = filterMarketsByDistance(location);
    loadFirst.forEach(marketName => loadData(generateApiUrl(marketName)));
    //loadLater.forEach(marketName => loadData(generateApiUrl(marketName)));
    //AxiosError 발생 (동시 요청 너무 많음) -> loadFirst 끝난 뒤에 loadLater 실행되도록 수정할 것

  }, [loadData]);

  return (
    <>
      <p>MarketDataLoader</p>
    </>
  )
};

export default MarketDataLoader;