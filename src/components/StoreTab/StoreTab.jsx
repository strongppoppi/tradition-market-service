import { useEffect, useState } from "react";
import { styled } from "styled-components";
import StoreList from "./StoreList";
import CategoryTag from "./CategoryTag";
import CategoryFilter from "./CategoryFilter";


const StoreTab = ({ marketIndex, storeNumber }) => {
    const [category, setCategory] = useState("");
    const [storeList, setStoreList] = useState(Array.from({ length: storeNumber }, (_, index) => index));
    const [isFiltering, setIsFiltering] = useState(false);

    useEffect(() => {
        console.log("category:", category);
        if (category == "") {
            const defaultStoreList = Array.from({ length: storeNumber }, (_, index) => index);
            setStoreList(defaultStoreList);
        } else {
            /* 제대로 작동하려면 realtime database의 stores/marketIndex의 각 점포에 "품목"이 추가되어야 함 */
            //setIsFiltering(true);
        }
    }, [category]);

    return (
        <>
            <Wrapper>
                <CategoryContainer>
                    <CategoryText>상품 선택</CategoryText>
                    <CategoryTagContainer>
                        <CategoryTag name="생선·수산물" category={category} setCategory={setCategory} />
                        <CategoryTag name="야채·과일" category={category} setCategory={setCategory} />
                        <CategoryTag name="고기·정육" category={category} setCategory={setCategory} />
                        <CategoryTag name="반찬" category={category} setCategory={setCategory} />
                    </CategoryTagContainer>
                </CategoryContainer>
                <StoreList marketIndex={marketIndex} storeList={storeList} />
            </Wrapper>
            {isFiltering && <CategoryFilter marketIndex={marketIndex} category={category} setStoreList={setStoreList} setIsFiltering={setIsFiltering} />}
        </>
    );
}

export default StoreTab;

//styled
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const CategoryContainer = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
`;

const CategoryTagContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CategoryText = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-right: 8px;
`;