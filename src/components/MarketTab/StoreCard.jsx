import React, { useState } from 'react';
import { styled } from "styled-components";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { firebaseDatabase, firebaseStorage } from "../../firebase-config";

//시장 탭에서 점포 목록에 들어갈 컴포넌트
const StoreCard = ({ marketIndex, storeIndex }) => {
    const [images, setImages] = useState([]);   //점포 사진 url 목록 (로딩 오래 걸리면 1개로 변경)
    const [storeData, setStoreData] = useState();

    //점포 사진
    const imageRef = ref(firebaseStorage, `images/stores/${marketIndex}/${storeIndex}`);
    listAll(imageRef)
        .then((res) => {
            return res.items;
        })
        .then((list) => {
            const imageUrlList = [];
            list.forEach(itemRef => {
                getDownloadURL(itemRef)
                    .then((url) => {
                        imageUrlList.push(url);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
            setImages(imageRef);
        })
        .catch((error) => {
            console.log(error);
        });


    //점포 정보
    const dataRef = ref(firebaseDatabase, `markets/${marketIndex}/stores/${storeIndex}`);
    get(dataRef).then((snapshot) => {
        if (snapshot.exists()) {
            setStoreData(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });


    //클릭 시 점포 탭으로 이동
    const handleClick = () => {

    }


    return (
        <>
            <Wrapper onClick={handleClick}>
                <ImageCarousel></ImageCarousel>
                <StoreName>{storeData.storeName}</StoreName>
                <StoreItem>{storeData.item}</StoreItem>
                <StoreDescription>{storeData.description}</StoreDescription>
                <TagContainer>
                    <Tag></Tag>
                </TagContainer>
            </Wrapper>
        </>
    );
};

export default StoreCard;

//styled
const Wrapper = styled.div`
    width: 90%;
    height: 100px;
    background-color: #fff;
`;

const ImageCarousel = styled.div``;

const StoreImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: 50% 50%;
`;

const StoreName = styled.p``;

const StoreItem = styled.p``;

const StoreDescription = styled.p``;

const TagContainer = styled.div``;

const Tag = styled.div``;