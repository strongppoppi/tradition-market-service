import React, { useState, useEffect } from 'react';
import { styled } from "styled-components";
import Carousel from "react-multi-carousel";
import StoreDataLoader from './StoreDataLoader';
import StoreImageLoader from './StoreImageLoader';


//시장 탭에서 점포 목록에 들어갈 컴포넌트
const StoreCard = ({ marketIndex, storeIndex }) => {
    const [imagesUrl, setImagesUrl] = useState([]);
    const [storeData, setStoreData] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    //데이터 존재하지 않으면 대체 텍스트 표시
    const displayData = (property) => {
        if (storeData.hasOwnProperty(property)) return storeData[property];
        else return "no data";
    }

    //태그 표시 여부
    const displayTag = (property) => {
        return storeData.hasOwnProperty(property) && storeData[property] == 1;
    }

    //클릭 시 점포 탭으로 이동
    const handleClick = () => {

    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 100
        }
    };


    return (
        <>
            <Wrapper onClick={handleClick}>
                {imageLoaded ?
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        arrows={false}
                        partialVisible={false}
                        responsive={responsive}
                        autoPlay={false}
                        infinite={false}>
                        {imagesUrl.map((url, index) =>
                            <ImageContainer key={index}>
                                <Image src={url} alt="store image" />
                            </ImageContainer>)}
                    </Carousel> :
                    <StoreImageLoader marketIndex={marketIndex} storeIndex={storeIndex} setImagesUrl={setImagesUrl} setImageLoaded={setImageLoaded} />}
                {dataLoaded ?
                    <DataContainer>
                        <StoreName>{displayData("점포명")}</StoreName>
                        <StoreItem>{displayData("판매상품")}</StoreItem>
                        <StoreDescription>{displayData("연락처")}</StoreDescription>
                        <TagContainer>
                            {displayTag("카드가맹유무") && <Tag>카드사용가능</Tag>}
                            {displayTag("제로페이가맹") && <Tag>제로페이</Tag>}
                            {displayTag("온누리") && <Tag>온누리상품권</Tag>}
                        </TagContainer>
                    </DataContainer> :
                    <StoreDataLoader marketIndex={marketIndex} storeIndex={storeIndex} setStoreData={setStoreData} setDataLoaded={setDataLoaded} />}
            </Wrapper>
        </>
    );
};

export default StoreCard;

//styled
const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    background-color: inherit;
    margin-bottom: 20px;

    box-sizing: border-box;
    border: solid 1px black;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 169px;
    background-color: grey;
`;

const Image = styled.img`
    width: 100%;
    height: 169px;
    object-fit: cover;
    object-position: 50% 50%;
`;

const DataContainer = styled.div`
    padding: 5px;
`;

const StoreName = styled.p`
    font-size: 20px;
    font-weight: 700;
`;

const StoreItem = styled.p`
    font-size: 12px;
    color: #565656;
`;

const StoreDescription = styled.p``;

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Tag = styled.div`
    display: inline-box;
    border: solid 1px #000000;
    padding: 5px;
    margin-right: 5px;
    font-size: 12px;
`;