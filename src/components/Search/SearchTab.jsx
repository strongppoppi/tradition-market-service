import React, { useState, useEffect } from 'react';
import { styled } from "styled-components";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

import marketsLocation from "../../markets.json";
import { useMyLocationStore } from "../../store/store";

import { useMyLocation } from '../../hooks/useMyLocation';

import SearchList from "./SearchList";

const SearchTab = ({naverMap, markers, setMarkers, myCurrentLocation, setMyCurrentLocation, setSelectedMarket}) => {
  const { naver } = window; // 네이버 지도
  const { addMyLocation } = useMyLocationStore(); // 전역 상태에 내 위치 저장
  const [searchTerm, setSearchTerm] = useState(""); // 검색값 변화 감지
  const [searchedData, setSearchedData] = useState([]); // 검색 결과 목록
  const [isListOpened, setIsListOpened] = useState(false); // 검색 목록 렌더링 여부

  useEffect(() => {
    if (searchTerm !== "") {
      setIsListOpened(true);
      handleSearch();
    } else {
      setIsListOpened(false);
    }
  }, [searchTerm]);

  // 검색어에 따른 목록 출력
  const handleSearch = () => {
    const data = marketsLocation.filter((item) => 
      item.mrktNm.includes(searchTerm)
    );
    console.log(data);
    setSearchedData(data);
  };

  // 나의 현 위치로 지도 이동 및 마커 표시
  useEffect(() => {
    if (naverMap) {
      console.log("useState: ", myCurrentLocation);
      addMyLocation(myCurrentLocation);
      var newCenter = new naver.maps.LatLng(myCurrentLocation.latitude, myCurrentLocation.longitude);
      var newMarkers = [...markers];
      var newMyLocationMarker = new naver.maps.Marker({
        position: newCenter,
        map: naverMap,
      });
      newMarkers.push(newMyLocationMarker);
      naverMap.setCenter(newCenter);
      setMarkers(newMarkers);
    }
  }, [myCurrentLocation]);

  return (
    <Wrapper>
      <TabContainer>
        <SearchContainer>
          <ButtonContainer>
            <SearchIcon src={require("../../assets/icons/searchIcon.png")} />
          </ButtonContainer>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="시장명·지역으로 검색"
          />
        </SearchContainer>
        {/* <MyLocationContainer>
          <ButtonContainer
            onClick={useMyLocation}
          >
            <FaLocationCrosshairs className="myLocationIcon" size={25} color="#212529" />
          </ButtonContainer>
        </MyLocationContainer> */}
      </TabContainer>
      { isListOpened && 
        <SearchList 
          searchedData={searchedData} 
          naverMap={naverMap} 
          setSearchTerm={setSearchTerm}
          setSelectedMarket={setSelectedMarket}
          setIsListOpened={setIsListOpened}
        />
      }
    </Wrapper>
  );
};

export default SearchTab;

// styled
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 3px 8px 0px rgba(17, 18, 19, 0.29);
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  gap: 5px;
`;

const MyLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #212529;
  border-left: none;
  padding: 5px;
`;

const ButtonContainer = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 24px;
  outline: none;
  border: none;
  color: #A6ADBC;
  font-size: 0.9375rem;

  &::placeholder{
    color: #A6ADBC;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;