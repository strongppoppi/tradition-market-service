import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import MarketDataLoader from "./MarketDataLoader";
import MarketImageLoader from "./MarketImageLoader";


const MarketInfoModal = ({ marketIndex }) => {
    const [marketData, setMarketData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setDataLoaded(false);
        setImageUrl("");
    }, [marketIndex]);

    if (!marketIndex) return (<></>);   //markerIndex 값 없으면 invisible

    const handleClick = () => {
        navigate(`/market/${marketIndex}`, { state: { data: marketData } });
    };

    return (
        <Wrapper onClick={handleClick}>
            {dataLoaded ?
                <>
                    <InfoContainer>
                        <MarketName>{marketData.mrktNm}</MarketName>
                        <MarketAddress>{marketData.rdnmadr}</MarketAddress>
                        <StoreNumber>{marketData.storNumber}</StoreNumber>
                    </InfoContainer>
                    <ImageContainer>
                        {imageUrl != "" && <MarketImage src={imageUrl} alt={marketData.mrktNm + " 대표사진"} />}
                        <MarketImageLoader marketIndex={marketIndex} setImageUrl={setImageUrl} />
                    </ImageContainer>
                </> :
                <MarketDataLoader marketIndex={marketIndex} setMarketData={setMarketData} setDataLoaded={setDataLoaded} />}
        </Wrapper>
    );
}

export default MarketInfoModal;

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
`;

const MarketImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: 50% 50%;
`;