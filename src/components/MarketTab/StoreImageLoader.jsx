import React from 'react';
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { firebaseStorage } from "../../firebase-config";

/* 현재 이미지 로딩 안되는 문제 있음 */

const StoreImageLoader = ({ marketIndex, storeIndex, setImagesUrl }) => {

    const imageRef = ref(firebaseStorage, `images/stores/${marketIndex}/${storeIndex}`);

    listAll(imageRef)
        .then((res) => {
            return res.items;
        })
        .then((list) => {
            const imageUrlList = [];
            if (list.length == 0) {
                imageUrlList.push("https://jkfenner.com/wp-content/uploads/2019/11/default.jpg");
            } else {
                list.forEach((itemRef) => {
                    getDownloadURL(itemRef)
                        .then((url) => {
                            imageUrlList.push(url);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });
            }
            console.log(storeIndex, imageUrlList.length, "(ImageLoader)");
            return imageUrlList;
        })
        .then((urlList) => {
            setImagesUrl(urlList);
        })
        .catch((error) => {
            console.log(error);
        });


    return (
        <></>
    )
};

export default StoreImageLoader;