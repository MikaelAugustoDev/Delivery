import styled from "styled-components";
import { Header } from "../../components/header";
import BurguerMain from "../../assets/burguermain.png";
import { Link } from "react-router-dom";

const Body = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 100px;
    position: relative;
    overflow-x: hidden;

    @media (max-width: 768px) {
        padding: 0 50px;
    }

    @media (max-width: 425px) {
        padding: 0 20px;
    }
`;

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding: 40px 0;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
        flex-direction: column
    }
`;

const SpaceTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`;

const SpaceImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }

    @media (max-width: 425px) {
        margin-top: 25px;
    }
`;

const PFig = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: #979797;

    @media (max-width: 320px) {
        font-size: 14px;
    }
`;

const H1 = styled.h1`
    font-size: 70px;

    @media (max-width: 1024px) {
        font-size: 50px;
    }

    @media (max-width: 768px) {
        font-size: 60px;
    }

    @media (max-width: 425px) {
        font-size: 50px;
    }

    @media (max-width: 375px) {
        font-size: 40px;
    }

    @media (max-width: 320px) {
        font-size: 30px;
    }
`;

const P = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: #979797;
    width: 70%;

    @media (max-width: 425px) {
        width: 100%;
    }

    @media (max-width: 375px) {
        font-size: 14px;
    }
`;

const ButtonBurguer = styled.button`
    width: 200px;
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

    @media (max-width: 320px) {
        width: 280px;
    }
`;

const ImgBurguer = styled.img`
    width: 100%;
    height: 100%;
`;

const LinkEditadoBtn = styled(Link)`
    text-decoration: none;
    color: #000;
`;

const Inicio = () => {
    return (
        <Body>
            <Header />
            <Main>
                <SpaceTexts>
                    <PFig>😋 Perde tempo não!</PFig>
                    <H1>O Hambúrguer mais delicioso da Sua Cidade</H1>
                    <P>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout.</P>
                    <LinkEditadoBtn to="/cardapio">
                        <ButtonBurguer>Fazer Pedido</ButtonBurguer>
                    </LinkEditadoBtn>
                </SpaceTexts>
                <SpaceImage>
                    <ImgBurguer src={BurguerMain} />
                </SpaceImage>
            </Main>
        </Body>
    );
};

export { Inicio };