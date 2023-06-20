import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import SetaVoltar from "../../assets/Vector.png";

const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 100px;
  overflow-x: hidden;
`;

const HeaderSacola = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    color: #1B1B1B;
    border-bottom: 1px solid #1B1B1B;
`;

const ConteudoSacola = styled.main`
    width: 100%;
    min-height: 60vh;
    display: flex;
`;

const TotalSomaEContinue = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    border-top: 1px dashed #1B1B1B;
    align-items: center;
`;

const DivTotal = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
`;

const Total = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #1B1B1B;

`;

const ValorTotal = styled.p`
    font-size: 30px;
    color: #FB9400;
`;

const ButtonContinue = styled.button`
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

const Sacola = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const voltarParaRotaAnterior = () => {
        navigate(-1);
    };

    return (
        <Body>
            {location.state?.from ? (
                <LinkVoltar to={location.state.from}>
                    <img src={SetaVoltar} />
                </LinkVoltar>
            ) : (
                <LinkVoltar to="#" onClick={voltarParaRotaAnterior}>
                    <img src={SetaVoltar} />
                </LinkVoltar>
            )}
            <HeaderSacola>Sacola</HeaderSacola>
            <ConteudoSacola></ConteudoSacola>
            <TotalSomaEContinue>
                <DivTotal>
                    <Total>Total</Total>
                    <ValorTotal>R$</ValorTotal>
                </DivTotal>
                <ButtonContinue>Continue</ButtonContinue>
            </TotalSomaEContinue>

        </Body>
    );
};

export { Sacola }