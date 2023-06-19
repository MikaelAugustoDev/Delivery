import { styled } from "styled-components";
import { PropsBurguer } from "../../types/cardBurguer";

const Card = styled.div`
    width: 260px;
    height: 260px;
    box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.16);
    border-radius: 24px;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

const DivImage = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivTexts = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 20px;
    gap
`;

const Name = styled.h3`
    color: #1B1B1B;
    font-size: 22px;
    font-weight: 600;
`;

const Preco = styled.h3`
    color: #FB9400;
    font-size: 22px;
    font-weight: 400;
`;

const ImgBurguer = styled.img`
    width: 150px;
`;

const CardHamburguer = (props: PropsBurguer) => {
    return (

        <Card>
            <DivImage>
                <ImgBurguer src={props.image} />
            </DivImage>
            <DivTexts>
                <Name>{props.name}</Name>
                <Preco>R$ {props.valor}</Preco>
            </DivTexts>
        </Card>
    );
};

export { CardHamburguer };