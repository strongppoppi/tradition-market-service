import { useState } from "react";
import { styled } from "styled-components";
import MarketTab from "../MarketTab/MarketTab";
import StoreTab from "../StoreTab/StoreTab";
import DrawerTab from "./DrawerTab";

const DrawerContent = ({ marketIndex, storeNumber }) => {
    const [tabA, setTabA] = useState(true);

    const onClickTab = (current) => {
        if (current != tabA) setTabA(current);
    };

    return (
        <Wrapper>
            <TabContainer>
                <DrawerTab name="탭A" active={tabA} onClick={() => onClickTab(true)}></DrawerTab>
                <DrawerTab name="탭B" active={!tabA} onClick={() => onClickTab(false)}></DrawerTab>
            </TabContainer>
            {tabA ?
                <MarketTab marketIndex={marketIndex} /> :
                <StoreTab marketIndex={marketIndex} storeNumber={storeNumber} />}
        </Wrapper>
    )
}

export default DrawerContent;

//styled
const Wrapper = styled.div`
    width: 100%;
`;

const TabContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;