import React, { useEffect, useRef, } from 'react';
import { styled } from "styled-components";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

import { useMyLocationStore } from "../../store/store";

const SearchTab = ({naverMap, markers, setMarkers, myCurrentLocation, setMyCurrentLocation}) => {
  const { naver } = window;
  const { addMyLocation } = useMyLocationStore();

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
      <SearchContainer>
        <ButtonContainer>
          <FaSearchLocation className="searchIcon" size={25} color="#212529" />
        </ButtonContainer>
        <SearchInput
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
    </Wrapper>
  );
};

export default SearchTab;

// styled
const Wrapper = styled.div`
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