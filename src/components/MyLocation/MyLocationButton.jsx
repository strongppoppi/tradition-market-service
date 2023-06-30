import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import { useMyLocationStore } from "../../store/store";

const MyLocationButton = ({ naverMap, markers, setMarkers, myCurrentLocation, setMyCurrentLocation }) => {
  const { naver } = window; // 네이버 지도
  const { addMyLocation } = useMyLocationStore(); // 전역 상태에 내 위치 저장

  // 내 위치 반환 함수
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

  // 나의 현 위치로 지도 이동 및 마커 표시
  useEffect(() => {
    if (naverMap) {
      console.log("useState: ", myCurrentLocation.latitude, myCurrentLocation.longitude);
      addMyLocation(myCurrentLocation);
      var newCenter = new naver.maps.LatLng(myCurrentLocation.latitude, myCurrentLocation.longitude);
      // 현 위치를 마커로 표시하지 않으려 함
      // var newMarkers = [...markers];
      // var newMyLocationMarker = new naver.maps.Marker({
      //   position: newCenter,
      //   map: naverMap,
      // });
      // newMarkers.push(newMyLocationMarker);
      naverMap.setCenter(newCenter);
      // setMarkers(newMarkers);
    }
  }, [myCurrentLocation]);

  // 버튼 클릭 시
  const handleButton = () => {
    fetchMyLocation();
  };

  return (
    <ButtonContainer
      onClick={() => handleButton()}
    >
      <IconImage src={require("../../assets/icons/myLocationIcon.png")}/>
    </ButtonContainer>
  );
};

export default MyLocationButton;

// styled
const ButtonContainer = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;