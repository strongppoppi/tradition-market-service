import { styled } from "styled-components";
import StoreList from "./StoreList";


const MarketTab = ({ marketIndex, storeNumber }) => {
    //react-bottom-drawer 라이브러리 사용 예정


    return (
        <>
            <StoreList marketIndex={marketIndex} storeNumber={storeNumber} />
        </>
    );
}

export default MarketTab;

//styled
const Wrapper = styled.div`
    width: 100%;
`;
