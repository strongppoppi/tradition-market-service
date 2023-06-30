import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import InfiniteScroll from 'react-infinite-scroller';
import StoreCard from "./StoreCard";


const StoreList = ({ marketIndex, storeNumber }) => {
    const [storeItems, setStoreItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const itemsPerLoad = 10;

    const loadFunc = () => {
        if (storeItems.length >= storeNumber) {
            setHasMore(false);
            return;
        };
        const newStoreItems = [...storeItems];
        for (let i = storeItems.length; i < Math.min(storeItems.length + itemsPerLoad, storeNumber); i++) {
            newStoreItems.push(<StoreCard marketIndex={marketIndex} storeIndex={i} key={i} />);
        }
        setStoreItems(newStoreItems);
    };

    return (
        <Wrapper>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMore}
                loader={<div key={0} />}
                useWindow={false}
            >
                {storeItems}
            </InfiniteScroll>
        </Wrapper>
    )
}

export default StoreList;

//styled
const Wrapper = styled.div`
    height: 700px;
    overflow: auto;
`;