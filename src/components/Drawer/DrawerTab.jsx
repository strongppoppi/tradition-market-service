import { styled } from "styled-components";

const DrawerTab = ({ name, active, onClick }) => {

    return (
        <Wrapper onClick={onClick}>
            {active ?
                <ActiveTab>{name}</ActiveTab> :
                <InactiveTab>{name}</InactiveTab>}
        </Wrapper>
    )
};

export default DrawerTab;

//styled
const Wrapper = styled.div`
    width: 40%;
`;

const ActiveTab = styled.div`
    text-align: center;
    color: black;
    border-bottom: solid 1px black;
    padding: 5px;
`;

const InactiveTab = styled.div`
    text-align: center;
    color: grey;
    padding: 5px;
`;