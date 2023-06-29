import React, { useEffect } from 'react';
import { firebaseDatabase } from "../../firebase-config";
import { ref, get } from "firebase/database";


const StoreDataLoader = ({ marketIndex, storeIndex, setStoreData, setDataLoaded }) => {

    const dataRef = ref(firebaseDatabase, `stores/${marketIndex}/${storeIndex}`);

    //점포 정보
    const loadData = () => {
        get(dataRef).then((snapshot) => {
            if (snapshot.exists()) {
                setStoreData(snapshot.val());
                setDataLoaded(true);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <>
            <p>Loading Store Information...</p>
        </>
    )
};

export default StoreDataLoader;