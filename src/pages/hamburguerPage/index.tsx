import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { HamburguerList } from "../../components/hamburguersList";
import { styled } from "styled-components";
import { Hamburguer } from "../../types/cardBurguer";
import { useState } from "react";
import SetaVoltarBranca from "../../assets/SetaBranca.png";

const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

const DivFundoAmarelo = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #FB9400;
`;

const DivInfoBurguer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 425px) {
    align-items: flex-start;
    padding: 0 25px
  }

  @media (max-width: 320px) {
    align-items: flex-start;
    padding: 0 15px
  }
`;

const ImageBurguer = styled.img`
  width: 400px;
  position: absolute;
  top: 2%;
  left: 35%;

  @media (max-width: 1024px) {
    top: -30px;
    left: 30%;
  }

  @media (max-width: 768px) {
    left: 23%;
  }

  @media (max-width: 425px) {
    width: 300px;
    top: 5%;
    left: 12%;
  }

  @media (max-width: 375px) {
    top: 3%;
    left: 8%;
  }

  @media (max-width: 375px) {
    left: 2%;
  }
`;

const NameBurguer = styled.h1`
  color: #1B1B1B;
  font-size: 40px;
  margin-top: 100px;

  @media (max-width: 425px) {
    margin-top: 60px;
    font-size: 30px;
  }

  @media (max-width: 375px) {
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }
`;

const IngredienteBurguer = styled.p`
  color: rgba(27, 27, 27, 0.5);
  width: 40%;
  text-align: center;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 90%;
    text-align: left;
  }

  @media (max-width: 375px) {
    width: 100%;
    text-align: left;
  }
`;

const QuantidadeBurguer = styled.div`
  display: flex;
  width: 40%;
  height: 60px;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const ContadorDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const TitleContador = styled.p`
  color: #1B1B1B;
  position: absolute;
  left: 37%;
  top: 74%;

  @media (max-width: 1024px) {
    left: 36%;
    top: 73%;
  }

  @media (max-width: 768px) {
    left: 27%;
  }

  @media (max-width: 425px) {
    left: 18%;
    top: 72%;
  }

  @media (max-width: 375px) {
    left: 17%;
    top: 71%;
  }

  @media (max-width: 320px) {
    left: 14%;
  }
`;

const ButtonAdd = styled.button`
  width: 30px;
  height: 30px;
  background: #CCC;
  border-radius: 4px;
  border: none;
  color: #96A3AB;
  font-size: 18px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #FB9400;
    cursor: pointer;
    color: #FFF;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  justify-content: center;
`;

const NumberQuantidade = styled.p`
  color: #FB9400;
  background-color: #F2F4F5;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PrecoDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrecoBurguer = styled.p`
  color: #FB9400;
  font-size: 28px;
  font-weight: 500;
`;

const ButtonAddSacola = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  background: #FB9400;
  color: #FFF;
  font-size: 16px;
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

  @media (max-width: 425px) {
    width: 380px;
  }

  @media (max-width: 375px) {
    width: 325px;
  }

  @media (max-width: 320px) {
    width: 270px;
  }
`;

const LinkVoltar = styled(Link)`
  position: absolute;
  top: 10%;
  left: 20%;

  &[data-testid="link-voltar"] {
    color: #FB9400;
  }

  @media (max-width: 425px) {
    top: 5%;
    left: 10%;
  }

  @media (max-width: 375px) {
    top: 5%;
    left: 5%;
  }
`;

const HamburguerPage = () => {
  const { id } = useParams();
  const hamburguer: Hamburguer | undefined = HamburguerList.find((item) => item.id === parseInt(id as string));

  if (!hamburguer) {
    return <div>Hambúrguer não encontrado.</div>;
  }

  const location = useLocation();
  const navigate = useNavigate();

  const voltarParaRotaAnterior = () => {
    navigate(-1);
  };

  const [quantidade, setQuantidade] = useState(1);

  const handleSubtrair = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    };
  };

  const valorTotal = hamburguer.preco * quantidade;

  return (
    <Body>
      {location.state?.from ? (
        <LinkVoltar to={location.state.from}>
          <img src={SetaVoltarBranca} />
        </LinkVoltar>
      ) : (
        <LinkVoltar to="#" onClick={voltarParaRotaAnterior}>
          <img src={SetaVoltarBranca} />
        </LinkVoltar>
      )}
      <DivFundoAmarelo></DivFundoAmarelo>
      <ImageBurguer src={hamburguer.imagem} />
      <DivInfoBurguer>
        <NameBurguer>{hamburguer.nome}</NameBurguer>
        <IngredienteBurguer>{hamburguer.ingredientes}</IngredienteBurguer>
        <QuantidadeBurguer>
          <TitleContador>Quantidade</TitleContador>
          <ContadorDiv>
            <Buttons>
              <ButtonAdd onClick={handleSubtrair}>-</ButtonAdd>
              <NumberQuantidade>{quantidade}</NumberQuantidade>
              <ButtonAdd onClick={() => setQuantidade(quantidade + 1)}>+</ButtonAdd>
            </Buttons>
          </ContadorDiv>
          <PrecoDiv>
            <PrecoBurguer>R$ {valorTotal}</PrecoBurguer>
          </PrecoDiv>
        </QuantidadeBurguer>
        <ButtonAddSacola>Adicionar à sacola</ButtonAddSacola>
      </DivInfoBurguer>
    </Body>
  );
};

export { HamburguerPage };
