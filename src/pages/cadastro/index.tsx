import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Eye from "../../assets/eye.svg";
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
    width: 14%;
    text-align: center;

    @media (max-width: 1024px) {
        width: 19%; 
    }

    @media (max-width: 768px) {
        width: 26%; 
    }

    @media (max-width: 425px) {
        width: 55%; 
    }

    @media (max-width: 375px) {
        width: 64%; 
    }

    @media (max-width: 320px) {
        width: 78%; 
    }
`;

const PSenha = styled.p`
    font-size: 15px;
    text-align: center;

    @media (max-width: 320px) {
        font-size: 13px; 
    }
`;

const Form = styled.form`
    border-top: 1px solid #949494;
    border-bottom: 1px solid #949494;
    width: 40%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        width: 60%; 
        height: 55%;
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

const LinkSenha = styled(Link)`
    color: #FB9400;
    text-decoration: none;
`;

const PasswordToggle = styled.button`
    position: absolute;
    top: 54%;
    right: 60px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 1024px) {
        top: 55%;
        right: 50px;
    }

    @media (max-width: 768px) {
        top: 56%;
        right: 50px;
    }

    @media (max-width: 425px) {
        right: 10px;
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


const Cadastrar = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        password: ""
      });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const location = useLocation();
    const navigate = useNavigate();

    const voltarParaRotaAnterior = () => {
        navigate(-1);
    };

    const handleForm = (event: any) => {
        event.preventDefault()
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value
        }));
      };

    const handleClick = () => {
        const { nome, email, password } = formValues;

        if (nome && email && password) {
          navigate("/login");
        } else {
          alert("Por favor, preencha todos os campos");
        }
    }

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
            <P>Preencha os campos para criar seu cadastro.</P>
            <Form onSubmit={handleForm}>
                <Input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={formValues.nome}
                    onChange={handleInputChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
                <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Digite sua senha"
                    value={formValues.password}
                    onChange={handleInputChange}
                />
                <PasswordToggle type="button" onClick={handleShowPassword}>
                    <img src={Eye} alt="Exibir senha" />
                </PasswordToggle>
                <BtnSubmit onClick={handleClick}>Cadastrar</BtnSubmit>
                <PSenha>Já tem cadastro? <LinkSenha to="/login">Fazer login</LinkSenha></PSenha>
            </Form>
        </Main>
    );
};

export { Cadastrar };