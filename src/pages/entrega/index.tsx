import { styled } from "styled-components";

const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 100px;
  overflow-x: hidden;
`;


const HeaderEntrega = styled.header`
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

const Entrega = () => {
    return(
        <Body>
            <HeaderEntrega>Finalizando Pedido</HeaderEntrega>
        </Body>
    )
}

export { Entrega };