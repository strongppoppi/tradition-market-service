import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Header from "../components/Header/Header";
import MarketMap from "../components/MarketMap/MarketMap";
import DrawerContent from "../components/Drawer/DrawerContent";
import Drawer from "../components/Drawer/Drawer";


const MarketPage = () => {
    const { marketIndex } = useParams();
    const location = useLocation();
    const marketApiData = location.state?.data;     //페이지 새로고침하면 오류 발생

    return (
        <PageWrapper>
            <Header title={marketApiData.mrktNm} />
            <MarketMap marketIndex={marketIndex} />
            <Drawer content={<DrawerContent marketIndex={marketIndex} storeNumber={marketApiData.storNumber} />} />
        </PageWrapper>
    );
};

export default MarketPage;