import React, { useEffect } from 'react';
import { firebaseDatabase } from "../../firebase-config";
import { ref, get, orderByChild, equalTo } from "firebase/database";


const CategoryFilter = ({ marketIndex, category, setStoreList, setIsFiltering }) => {

    const dataRef = ref(firebaseDatabase, `stores/${marketIndex}`);
    const convertCategory = {
        "생선·수산물": "",
        "야채·과일": "야채",
        "고기·정육": "고기",
        "반찬": "반찬"
    }

    console.log(convertCategory[category]);

    //'품목': category인 점포 데이터 필터링
    const loadData = () => {
        /* 제대로 작동하려면 realtime database의 stores/marketIndex의 각 점포에 "품목"이 추가되어야 함 */
        const query = orderByChild(dataRef, '품목');
        const filteredQuery = equalTo(query, convertCategory[category]);

        get(filteredQuery)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const filteredStoreList = Object.keys(snapshot.val());
                    console.log(filteredStoreList);
                    setIsFiltering(false);
                    setStoreList(filteredStoreList);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.log(error);
            });


        // try {
        //     const filteredList = [];
        //     dataRef.orderByChild('분류').equalTo(convertCategory[category]).on('value', (snapshot) => {
        //         filteredList.push(snapshot.key);
        //     });
        //     setIsFiltering(false);
        //     setStoreList(filteredList);
        // } catch (err) {
        //     console.log(err);
        // }

    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <></>
    );
};

export default CategoryFilter;
