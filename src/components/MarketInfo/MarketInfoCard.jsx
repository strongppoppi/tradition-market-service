import { styled } from "styled-components";


const MarketInfoCard = ({ market, marketData }) => {
    if (!market) return (<></>);

    console.log("marketInfoCard: ", market);
    //marketData[selectedMarket] -> 표시

    return (
        <>
            <Wrapper>
                MarketInfoCard: {market}
            </Wrapper>
        </>
    );
}

export default MarketInfoCard;

//styled
const Wrapper = styled.div`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    height: 200px;
    background-color: #fff;
`;