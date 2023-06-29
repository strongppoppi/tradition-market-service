import React from "react";
import { styled } from "styled-components";
import RankingItem from "./RankingItem";

const MarketRanking = () => {

    //임시 데이터
    const rankingList = [
        { "점포명": "가게하나", "취급품목": "떡볶이" },
        { "점포명": "가게둘", "취급품목": "순대" },
        { "점포명": "가게셋", "취급품목": "튀김" },
        { "점포명": "가게넷", "취급품목": "김말이" },
        { "점포명": "가게다섯", "취급품목": "어묵" }
    ];


    return (
        <Wrapper>
            <Title>인기점포 Top5</Title>
            <ListContainer>
                {rankingList.map((store, index) =>
                    <RankingItem num={index + 1} name={store['점포명']} detail={store['취급품목']} />
                )}
            </ListContainer>
        </Wrapper>
    );
}

export default MarketRanking;

//styled
const Wrapper = styled.div`
    width: 100%;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
`;

const ListContainer = styled.div`

`;