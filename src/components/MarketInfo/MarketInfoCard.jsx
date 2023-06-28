import { useEffect, useState } from "react";
import { styled } from "styled-components";
import MarketDataLoader from "./MarketDataLoader";
import MarketImageLoader from "./MarketImageLoader";


const MarketInfoCard = ({ marketIndex }) => {
    const [marketData, setMarketData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState("");


    useEffect(() => {
        setDataLoaded(false);
        setImageUrl("");
    }, [marketIndex]);

    if (!marketIndex) return (<></>);

    return (
        <Wrapper>
            {dataLoaded ?
                <>
                    <p>{marketData.mrktNm}</p>
                    <p>{marketData.rdnmadr}</p>
                    { }
                    <MarketImageContainer>
                        <MarketImage src={imageUrl} alt="대표사진" />
                        <MarketImageLoader marketIndex={marketIndex} setImageUrl={setImageUrl} />
                    </MarketImageContainer>
                </> :
                <MarketDataLoader marketIndex={marketIndex} setMarketData={setMarketData} setDataLoaded={setDataLoaded} />}
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

const MarketImageContainer = styled.div`
    width: 100px;
    height: 100px;
`;

const MarketImage = styled.img`
    width: 100px;
    height: 100px;
`;