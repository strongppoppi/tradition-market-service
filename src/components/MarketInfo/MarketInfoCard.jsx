import { useEffect, useState } from "react";
import { styled } from "styled-components";
import MarketDataLoader from "./MarketDataLoader";


const MarketInfoCard = ({ marketIndex }) => {
    const [currentMarket, setCurrentMarket] = useState(null);
    const [marketData, setMarketData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
    }, [marketIndex]);

    if (!marketIndex) return (<></>);

    return (
        <Wrapper>
            {isLoaded ?
                <>
                    <p>{marketData.mrktNm}</p>
                    <p>{marketData.rdnmadr}</p>
                </> :
                <MarketDataLoader marketIndex={marketIndex} setMarketData={setMarketData} setIsLoaded={setIsLoaded} />}
        </Wrapper>

    );
}

export default MarketInfoCard;

//styled
const Wrapper = styled.div`
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    height: 200px;
    background-color: #fff;
`;