import { styled } from "styled-components";

const CategoryTag = ({ name, category, setCategory }) => {

    const handleClick = () => {
        if (name != category) setCategory(name);
        else setCategory("");
    }

    return (
        <Wrapper onClick={handleClick}>
            {name == category ?
                <ActiveContainer>
                    <Name>{name}</Name>
                </ActiveContainer> :
                <InactiveContainer>
                    <Name>{name}</Name>
                </InactiveContainer>}
        </Wrapper>
    )
}

export default CategoryTag;


//styled
const Wrapper = styled.div`
    margin-right: 5px;
`;

const ActiveContainer = styled.div`
    height: 29px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #fff;
    border: solid 1px #000;
    background-color: #000;
`;

const InactiveContainer = styled.div`
    height: 29px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #000;
    border: solid 1px #000;
    background-color: inherit;
`;

const Name = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin: 0 8px;
`;