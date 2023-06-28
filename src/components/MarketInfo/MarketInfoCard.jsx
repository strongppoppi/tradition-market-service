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

    if (!marketIndex) return (<></>);   //markerIndex 값 없으면 invisible

    return (
        <Wrapper>
            {dataLoaded ?
                <>
                    <InfoContainer>
                        <MarketName>{marketData.mrktNm}</MarketName>
                        <MarketAddress>{marketData.rdnmadr}</MarketAddress>
                        <StoreNumber>{marketData.storNumber}</StoreNumber>
                    </InfoContainer>
                    <ImageContainer>
                        {imageUrl != "" ? <MarketImage src={imageUrl} alt={marketData.mrktNm + " 대표사진"} /> : null}
                        <MarketImageLoader marketIndex={marketIndex} setImageUrl={setImageUrl} />
                    </ImageContainer>
                </> :
                <MarketDataLoader marketIndex={marketIndex} setMarketData={setMarketData} setDataLoaded={setDataLoaded} />}
        </Wrapper>
    );
}

export default MarketInfoCard;

//styled
const Wrapper = styled.div`
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
`;

const InfoContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const MarketName = styled.p`
`;

const StoreNumber = styled.p`
`;

const MarketAddress = styled.p`
`;

const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: lightgrey;
`;

const MarketImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: 50% 50%;
`;