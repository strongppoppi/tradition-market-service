import React, { useEffect } from 'react';
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { firebaseStorage } from "../../firebase-config";

/*
images/markets/${marketIndex}/
*/

const MarketImageLoader = ({ marketIndex, setImageUrl }) => {

    //1. 파베에 이미지 파일명 market_${marketIndex}.jpg로 등록하는 경우

    // const imageRef = ref(firebaseStorage, `images/markets/${marketIndex}/market_${marketIndex}.jpg`);

    // getDownloadURL(imageRef)
    //     .then((url) => {
    //         // `url` is the download URL for `images/markets/${marketIndex}/market_${marketIndex}.jpg`

    //         // Or inserted into an <img> element
    //         setImageUrl(url);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         // Handle any errors
    //     });



    //2. 그냥 아무 파일명으로 업로드할 경우

    const imageRef = ref(firebaseStorage, `images/markets/${marketIndex}`);

    listAll(imageRef)
        .then((res) => {
            return res.items;
        })
        .then((list) => {
            if (list.length == 0) {
                setImageUrl("logo512.png");
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




    return (
        <></>
    )
};

export default MarketImageLoader;