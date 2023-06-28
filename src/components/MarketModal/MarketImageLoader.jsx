import React from 'react';
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { firebaseStorage } from "../../firebase-config";


const MarketImageLoader = ({ marketIndex, setImageUrl }) => {

    //1. 그냥 아무 파일명으로 업로드할 경우

    const imageRef = ref(firebaseStorage, `images/markets/${marketIndex}`);

    listAll(imageRef)
        .then((res) => {
            return res.items;
        })
        .then((list) => {
            if (list.length == 0) {
                setImageUrl("logo512.png"); //파베에 시장 이미지 없으면 default 이미지 삽입 (경로 수정 필요)
            } else {
                const itemRef = list[0];
                getDownloadURL(itemRef)
                    .then((url) => {
                        setImageUrl(url);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
        .catch((error) => {
            console.log(error);
        });

    /*
        2. 파베에 이미지 파일명 market_${marketIndex}.jpg로 등록하는 경우
    
        const imageRef = ref(firebaseStorage, `images/markets/${marketIndex}/market_${marketIndex}.jpg`);
    
        getDownloadURL(imageRef)
            .then((url) => {
                // `url` is the download URL for `images/markets/${marketIndex}/market_${marketIndex}.jpg`
    
                // Or inserted into an <img> element
                setImageUrl(url);
            })
            .catch((error) => {
                console.log(error);
                // Handle any errors
            });
    */


    return (
        <></>
    )
};

export default MarketImageLoader;