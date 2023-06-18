import { styled } from "styled-components";
import { Header } from "../../components/header";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Body = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
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
    align-items: center;
`;

const Title = styled.h2`
    color: #1B1B1B;
    text-align: center;
`;

const Form = styled.form`
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Input = styled.input`
    width: 50%;
    height: 40px;
    background: #f0f0f0;
    border: none;
    border-radius: 5px;
    padding: 15px;

    &:focus {
        outline: none;
    }

    @media (max-width: 425px) {
        width: 100%; 
    }
`;

const Textarea = styled.textarea`
    width: 50%;
    height: 100px;
    background: #f0f0f0;
    border: none;
    border-radius: 5px;
    padding: 15px;

    &:focus {
        outline: none;
    }

    @media (max-width: 425px) {
        width: 100%; 
    }
`;

const Button = styled.button`
    width: 50%;
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

const DivOption = styled.div`
    width: 80%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivLinhas = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const P = styled.p`
    color: #FB9400;
    font-weight: 700;
`;

const SpanLinha = styled.span`
    border: 1px solid #FB9400;
    width: 80%;
`;

const DivRedes = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RedesContato = styled.div`
    width: 80%;
    height: 100px;
    margin-top: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

const A = styled.a`
    text-decoration: none;
`;

const WppEdit = styled(WhatsAppIcon)`
    color: #1B1B1B;

    &:hover {
        color: #FB9400;
        cursor: pointer;
    }
`;

const InstaEdit = styled(InstagramIcon)`
    color: #1B1B1B;

    &:hover {
        color: #FB9400;
        cursor: pointer;
    }
`;

const FaceEdit = styled(FacebookIcon)`
    color: #1B1B1B;

    &:hover {
        color: #FB9400;
        cursor: pointer;
    }
`;

const TwitEdit = styled(TwitterIcon)`
    color: #1B1B1B;

    &:hover {
        color: #FB9400;
        cursor: pointer;
    }
`;

const EmailEdit = styled(EmailIcon)`
    color: #1B1B1B;

    &:hover {
        color: #FB9400;
        cursor: pointer;
    }
`;

const Contato = () => {
    return (
        <Body>
            <Header />
            <Main>
                <Title>Entre em contato com o suporte</Title>
                <Form>
                    <Input 
                        type="text"
                        placeholder="Digite seu nome"
                    />
                    <Input
                        type="email"
                        placeholder="Digite seu e-mail"
                    />
                    <Textarea 
                        placeholder="Escreva sua mensagem"
                    />
                    <Button>Enviar</Button>
                </Form>
                <DivOption>
                    <DivLinhas><SpanLinha></SpanLinha></DivLinhas>
                    <P>OU</P>
                    <DivLinhas><SpanLinha></SpanLinha></DivLinhas>
                </DivOption>
                <DivRedes>
                    <Title>Entre em contato pelas redes sociais</Title>
                    <RedesContato>
                        <A>
                            <WppEdit sx={{fontSize: 45, transition: "0.3s ease-in-out"}}/>
                        </A>
                        <A>
                            <InstaEdit sx={{fontSize: 45, transition: "0.3s ease-in-out"}}/>
                        </A>
                        <A>
                            <FaceEdit sx={{fontSize: 45, transition: "0.3s ease-in-out"}}/>
                        </A>
                        <A>
                            <TwitEdit sx={{fontSize: 45, transition: "0.3s ease-in-out"}}/>
                        </A>
                        <A>
                            <EmailEdit sx={{fontSize: 45, transition: "0.3s ease-in-out"}}/>
                        </A>
                    </RedesContato>
                </DivRedes>
            </Main>
        </Body>
    );
};

export { Contato };