import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import marketsLocation from "../../markets.json";
import SearchList from "./SearchList";

const SearchTab = ({naverMap, setSelectedMarket}) => {
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