import React from "react";
import { styled } from "styled-components";

import NearMarketButton from "./NearMarketButton";
import MyLocationButton from "./MyLocationButton";

const LocalTab = ({ naverMap, markers, setMarkers, myCurrentLocation, setMyCurrentLocation }) => {
  return (
    <Wrapper>
      <NearMarketButton
        naverMap={naverMap}
        markers={markers}
        myCurrentLocation={myCurrentLocation}
      />
      <MyLocationButton
        naverMap={naverMap}
        markers={markers}
        setMarkers={setMarkers}
        myCurrentLocation={myCurrentLocation}
        setMyCurrentLocation={setMyCurrentLocation}
      />
    </Wrapper>
  );
};

export default LocalTab;

// styled
const Wrapper = styled.div`
  position: absolute;
  bottom: 125px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;