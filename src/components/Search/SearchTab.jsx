import React from 'react';
import { styled } from "styled-components";
import { FaSearchLocation} from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

const SearchTab = () => {
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
        <ButtonContainer>
          <FaLocationCrosshairs className="myLocationIcon" size={25} color="#212529" />
        </ButtonContainer>
      </MyLocationContainer>
    </Wrapper>
  );
};

export default SearchTab;

// styled
const Wrapper = styled.div`
  position: absolute;
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

const ButtonContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 30px;
  padding: 0 10px;
  outline: none;
  border: none;
`;