import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Header from "../components/Header/Header";


const MarketPage = () => {
    const { marketIndex } = useParams();
    const location = useLocation();
    const marketApiData = location.state?.data;

    return (
        <PageWrapper>
            <Header title={marketApiData.mrktNm} />
        </PageWrapper>
    );
};

export default MarketPage;