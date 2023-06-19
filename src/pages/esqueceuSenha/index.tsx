import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import SetaVoltar from "../../assets/Vector.png";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;

    @media (max-width: 320px) {
        padding: 0 30px;
    }
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

const P = styled.p`
    font-size: 15px;
    width: 20%;
    font-weight: 400;
    text-align: center;

    @media (max-width: 1024px) {
        width: 30%; 
    }

    @media (max-width: 768px) {
        width: 38%; 
    }

    @media (max-width: 425px) {
        width: 80%; 
    }

    @media (max-width: 375px) {
        width: 100%; 
    }
`;

const H2 = styled.h2`
    font-size: 24px;
    color: #1B1B1B;
`;

const Form = styled.form`
    border-top: 1px solid #949494;
    border-bottom: 1px solid #949494;
    width: 40%;
    height: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        width: 60%; 
    }
    
    @media (max-width: 425px) {
        width: 100%; 
    }
`;

const Input = styled.input`
    width: 80%;
    height: 40px;
    background: #f0f0f0;
    border: none;
    border-radius: 5ps;
    padding: 15px;

    &:focus {
        outline: none;
    }

    @media (max-width: 425px) {
        width: 100%; 
    }
`;

const BtnSubmit = styled.button`
    width: 80%;
    height: 40px;
    border: none;
    background: #FB9400;
    color: #FFF;
    font-size: 14px;
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
        width: 100%; 
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


const EsqueceuSenha = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const voltarParaRotaAnterior = () => {
        navigate(-1);
    };

    return (
        <Main>
            {location.state?.from ? (
                <LinkVoltar to={location.state.from}>
                    <img src={SetaVoltar} />
                </LinkVoltar>
            ) : (
                <LinkVoltar to="#" onClick={voltarParaRotaAnterior}>
                    <img src={SetaVoltar}/>
                </LinkVoltar>
            )}

            <Logo>Mikael<Span>●</Span>Delivery</Logo>
            <H2>Esqueceu sua senha?</H2>
            <P>Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir  a sua senha.</P>
            <Form>
                <Input
                    type="text"
                    placeholder="Digite seu e-mail"
                />
                <BtnSubmit>Enviar</BtnSubmit>
            </Form>
        </Main>
    );
};

export { EsqueceuSenha };