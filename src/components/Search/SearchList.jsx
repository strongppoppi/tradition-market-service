import React, { useState, useEffect } from 'react';
import { styled } from "styled-components";

import marketsLocation from "../../markets.json";

const SearchList = ({searchedData, naverMap, setSelectedMarket, setIsListOpened, setSearchTerm}) => {
  const { naver } = window; // 네이버 지도
  const limitedData = searchedData.slice(0, 15); // 검색 결과 수 제한

  // 해당 검색 값 클릭 시
  const handleClick = (latitude, longitude, marketName) => {
    if (naverMap) {
      var newCenter = new naver.maps.LatLng(latitude, longitude);
      naverMap.setCenter(newCenter);
      const targetIndex = marketsLocation.findIndex(item => item.mrktNm === marketName);
      console.log(targetIndex);
      setSelectedMarket(targetIndex);
      setSearchTerm(marketName);
      setIsListOpened(false);
    };
  };

  return (
    <Wrapper>
      {limitedData.map((item, index) => (
        <ItemContainer 
          key={index}
          onClick={() => handleClick(item.latitude, item.longitude, item.mrktNm)}
        >
          <Text>{item.mrktNm}</Text>
        </ItemContainer>
      ))}
    </Wrapper>
  );
};

export default SearchList;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ItemContainer = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  border: 1px solid #212529;
  border-top: none;
`;

const Text = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;