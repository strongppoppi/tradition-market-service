import React from "react";
import { styled } from "styled-components";

const RankingItem = ({ num, name, detail }) => {

    return (
        <Wrapper>
            <NumberContainer>
                <Number>{num}</Number>
            </NumberContainer>
            <ItemContainer>
                <ItemName>{name}</ItemName>
                <ItemDetail>{detail}</ItemDetail>
            </ItemContainer>
        </Wrapper>
    );
}

export default RankingItem;

//styled
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const NumberContainer = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: grey;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Number = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

const ItemContainer = styled.div`
    width: 95%;
    height: 30px;
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 15px;
    background-color: lightgrey;
`;

const ItemName = styled.div`
    font-size: 16px;
`;

const ItemDetail = styled.div`
    font-size: 14px;
`;