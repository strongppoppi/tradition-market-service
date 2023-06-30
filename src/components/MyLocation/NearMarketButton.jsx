import React from "react";
import { styled } from "styled-components";

const NearMarketButton = ({ naverMap, markers, myCurrentLocation }) => {
  const { naver } = window;
  let currentLatitude = myCurrentLocation.latitude;
  let currentLongitude = myCurrentLocation.longitude;

  // 함수: 두 좌표 간 거리 구하기
  const getDistance = (lat1, lon1, lat2, lon2) => {
    let x = lat2 - lat1;
    let y = lon2 - lon1;
    return Math.sqrt(x * x + y * y);
  };

  // 함수: 가장 가까운 마커 찾기
  const findNearestMarker = (markers, currentLatitude, currentLongitude) => {
    var nearestMarker = null;
    var minDistance = Number.MAX_VALUE;

    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];
      var markerLatitude = marker.position.y;
      var markerLongitude = marker.position.x;
  
      var distance = getDistance(
        currentLatitude,
        currentLongitude,
        markerLatitude,
        markerLongitude
      );
  
      if (distance < minDistance) {
        minDistance = distance;
        nearestMarker = marker;
      }
    }

    return nearestMarker;
  };

  // 버튼 클릭 시
  const handleButton = async () => {
    var nearestMarker = await findNearestMarker(markers, currentLatitude, currentLongitude);
    console.log("가장 가까운 시장 마커: ", nearestMarker);
    if (naverMap) {
      var newCenter = new naver.maps.LatLng(nearestMarker.position.y, nearestMarker.position.x);
      naverMap.setCenter(newCenter);
    };
  };

  return (
    <ButtonContainer
      onClick={handleButton}
    >
      <IconImage src={require("../../assets/icons/marketIcon.png")} />
      <ButtonText>
        가까운 시장
      </ButtonText>
    </ButtonContainer>
  );
};

export default NearMarketButton;

// styled
const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border-radius: 9.846px;
  box-shadow: 0px 3px 8px 0px rgba(17, 18, 19, 0.29);
  padding: 10px 10px;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

const ButtonText = styled.h2`
  font-size: 1.0625rem;
  font-weight: 500;
  line-height: 1.0625rem;
  letter-spacing: -0.34px;
  color: #111213;
`;