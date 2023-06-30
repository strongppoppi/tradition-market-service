import { styled } from "styled-components";
import StoreList from "./StoreList";


const StoreTab = ({ marketIndex, storeNumber }) => {


    return (
        <Wrapper>
            <StoreList marketIndex={marketIndex} storeNumber={storeNumber} />
        </Wrapper>
    );
}

export default StoreTab;

//styled
const Wrapper = styled.div`
    width: 100%;
`;