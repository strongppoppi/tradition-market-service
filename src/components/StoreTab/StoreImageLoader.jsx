import React from 'react';
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { firebaseStorage } from "../../firebase-config";


const StoreImageLoader = ({ marketIndex, storeIndex, setImagesUrl, setImageLoaded }) => {

    const imageRef = ref(firebaseStorage, `images/stores/${marketIndex}/${storeIndex}`);

    listAll(imageRef)
        .then((res) => {
            return res.items;
        })
        .then((list) => {
            const imageUrlPromises = list.map((itemRef) => {
                return getDownloadURL(itemRef)
                    .catch((error) => {
                        console.log(error);
                        return null; // 오류 발생 시 null을 반환하거나 다른 기본 URL로 대체할 수 있습니다.
                    });
            });

            return Promise.all(imageUrlPromises);
        })
        .then((urlList) => {
            const filteredUrlList = urlList.filter((url) => url !== null); // null이 아닌 URL만 필터링할 수 있습니다.

            const imageUrlList = filteredUrlList.length > 0 ? filteredUrlList : ["https://jkfenner.com/wp-content/uploads/2019/11/default.jpg"];

            setImageLoaded(true);
            setImagesUrl(imageUrlList);
        })
        .catch((error) => {
            console.log(error);
        });


    return (
        <></>
    )
};

export default StoreImageLoader;