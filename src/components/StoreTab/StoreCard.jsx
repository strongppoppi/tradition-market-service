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

    const displayData = (property) => {
        if (storeData.hasOwnProperty(property)) return storeData[property];
        else return "no data";
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

    // //image 오류 확인용
    // useEffect(() => {
    //     console.log(storeIndex, imagesUrl.length, "(StoreCard)");
    // }, [imagesUrl]);

    return (
        <>
            <Wrapper onClick={handleClick}>
                <p>{marketIndex}번 시장 - {storeIndex}번 점포</p>
                {imageLoaded ?
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        arrows={false}
                        partialVisible={false}
                        responsive={responsive}
                        autoPlay={false}
                        infinite={false}
                        partialVisbile={true}>
                        {imagesUrl.map((url, index) =>
                            <ImageContainer key={index}>
                                <Image src={url} alt="store image" />
                            </ImageContainer>)}
                    </Carousel> :
                    <StoreImageLoader marketIndex={marketIndex} storeIndex={storeIndex} setImagesUrl={setImagesUrl} setImageLoaded={setImageLoaded} />}
                {/* {imageLoaded ?
                    imagesUrl.map((url, index) =>
                        <ImageContainer key={index}>
                            <Image src={url} alt="store image" />
                        </ImageContainer>) :
                    <StoreImageLoader marketIndex={marketIndex} storeIndex={storeIndex} setImagesUrl={setImagesUrl} setImageLoaded={setImageLoaded} />} */}
                {dataLoaded ? <>
                    <StoreName>{displayData("점포명")}</StoreName>
                    <StoreItem>{displayData("판매상품")}</StoreItem>
                    <StoreDescription>{displayData("연락처")}</StoreDescription>
                </> :
                    <StoreDataLoader marketIndex={marketIndex} storeIndex={storeIndex} setStoreData={setStoreData} setDataLoaded={setDataLoaded} />}
            </Wrapper>
        </>
    );
};

export default StoreCard;

//styled
const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: lightgrey;
    margin-bottom: 20px;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: grey;
`;

const Image = styled.img`
    width: 100%;
    height: 100px;
    object-fit: contain;
    object-position: 50% 50%;
`;

const StoreName = styled.p``;

const StoreItem = styled.p``;

const StoreDescription = styled.p``;

const TagContainer = styled.div``;

const Tag = styled.div``;