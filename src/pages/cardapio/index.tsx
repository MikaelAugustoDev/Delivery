import { styled } from "styled-components";
import { Header } from "../../components/header";
import { CardHamburguer } from "../../components/cardHamburguer";
import { Link } from "react-router-dom";
import { HamburguerList } from "../../components/hamburguersList";

const Body = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 80px;
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
    flex-direction: column;
`;

const H2 = styled.h2`
    color: #1B1B1B;
`;

const P = styled.p`
    color: #979797;
`;

const OpcoesCarpadio = styled.div`
    width: 100%;
    min-height: 60vh;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
`;

const LinkBurguer = styled(Link)`
    text-decoration: none;
`;

const Cardapio = () => {

    const hamburguers = HamburguerList

    return (
        <Body>
            <Header />
            <Main>
                <H2>Seja Bem-Vindo 👋🏻</H2>
                <P>O que deseja para hoje?</P>
                <OpcoesCarpadio>
                    {hamburguers.map((hamburguer, index) => (
                        <LinkBurguer to={`/cardapio/${hamburguer.id} `} key={index}>
                            <CardHamburguer
                                name={hamburguer.nome}
                                valor={hamburguer.preco}
                                image={hamburguer.imagem}
                            />
                        </LinkBurguer>
                    ))}
                </OpcoesCarpadio>
            </Main>
        </Body>
    );
};

export { Cardapio };