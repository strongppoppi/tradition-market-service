import React, { useState, useEffect } from 'react';
import { styled } from "styled-components";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

import marketsLocation from "../../markets.json";
import { useMyLocationStore } from "../../store/store";

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

  // 나의 현 위치 가져오기
  const fetchMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  };

  return (
    <Wrapper>
      <TabContainer>
        <SearchContainer>
          <ButtonContainer>
            <FaSearchLocation className="searchIcon" size={25} color="#212529" />
          </ButtonContainer>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="어떤 시장에 갈까요?"
          />
        </SearchContainer>
        <MyLocationContainer>
          <ButtonContainer
            onClick={fetchMyLocation}
          >
            <FaLocationCrosshairs className="myLocationIcon" size={25} color="#212529" />
          </ButtonContainer>
        </MyLocationContainer>
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
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  gap: 5px;
  border: 1px solid #212529;
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
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 30px;
  padding: 0 10px;
  outline: none;
  border: none;
`;