import { styled } from "styled-components";
import { Link } from "react-router-dom";
import HamburguerMenu from "../menuHamburguer";

const Headers = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid #c4c4c4;
`;

const DivLogo = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-family: 'Calistoga', cursive;
    font-size: 36px;
    color: #1B1B1B;

    @media (max-width: 320px) {
        font-size: 30px;
    }
`;

const Span = styled.span`
    color: #FB9400;
    font-family: 'Inter', sans-serif;
`;

const Navigation = styled.nav`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ListItens = styled.ul`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 30px;
`;

const Item = styled.li`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 400;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #FB9400;
        cursor: pointer;
    }
`;

const Button = styled.button`
    width: 100%;
    background-color: #FB9400;
    border: none;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #FFF;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        transform: translate(-0.25rem,-0.25rem);
        box-shadow: 0.25rem 0.25rem #c4c4c4;
    }

    &:active {
        transform: translate(0);
        box-shadow: none;
    }
`;

const LinkEditado = styled(Link)`
    text-decoration: none;
    color: #000;
`;

const LinkEditadoButton = styled(Link)`
    text-decoration: none;
    color: #000;
    width: 150px;
`;

const NavigationHamburguer = styled.nav`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        width: 60%;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
    }
`;

const Header = () => {
    return (
        <Headers>
            <DivLogo>
                <Logo>Mikael<Span>●</Span>Delivery</Logo>
            </DivLogo>
            <Navigation>
                <ListItens>
                    <LinkEditado to="/">
                        <Item>Início</Item>
                    </LinkEditado>
                    <LinkEditado to="/cardapio">
                        <Item>Cardápio</Item>
                    </LinkEditado>
                    <LinkEditado to="/contato">
                        <Item>Contato</Item>
                    </LinkEditado>
                </ListItens>
                <LinkEditadoButton to="/login">
                    <Button>Fazer Login</Button>
                </LinkEditadoButton>
            </Navigation>
            <NavigationHamburguer>
                <HamburguerMenu/>
            </NavigationHamburguer>
        </Headers>
    );
};

export { Header };