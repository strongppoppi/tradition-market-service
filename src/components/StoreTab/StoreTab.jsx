import { styled } from "styled-components";
import StoreList from "./StoreList";


const StoreTab = ({ marketIndex, storeNumber }) => {
    //react-bottom-drawer 라이브러리 사용 예정


    return (
        <>
            <StoreList marketIndex={marketIndex} storeNumber={storeNumber} />
        </>
    );
}

export default StoreTab;

//styled
const Wrapper = styled.div`
    width: 100%;
`;
