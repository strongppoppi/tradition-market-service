import { styled } from "styled-components";
import MarketRanking from "./Ranking/MarketRanking";
import MarketInfo from "./MarketInfo";


const MarketTab = ({ marketIndex }) => {


    return (
        <Wrapper>
            <MarketInfo />
            <MarketRanking />
        </Wrapper>
    );
}

export default MarketTab;

//styled
const Wrapper = styled.div`
    width: 100%;
    flex: 1;    
`;
