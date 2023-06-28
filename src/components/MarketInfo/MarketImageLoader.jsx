import React, { useEffect } from 'react';
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { firebaseStorage } from "../../firebase-config";

/*
images/markets/${marketIndex}/
*/

const MarketImageLoader = ({ marketIndex, setImageUrl }) => {
    const imageRef = ref(firebaseStorage, `images/markets/${marketIndex}/market_${marketIndex}.jpg`);

    // listAll(imageRef)
    //     .then((res) => {
    //         console.log(res.items);
    //     }).catch((error) => {
    //         console.log(error);
    //     });


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

    return (
        <></>
    )
};

export default MarketImageLoader;