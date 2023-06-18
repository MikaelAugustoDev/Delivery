import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HamburguerMenu: React.FC = () => {
    const [isopen, setIsopen] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsopen(!isopen);
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <>
            <HamburguerIcon onClick={handleMenuClick} isopen={isopen}>
                <span></span>
                <span></span>
                <span></span>
            </HamburguerIcon>
            <MenuWrapper isopen={isopen}>
                <MenuItems>

                    <LinkEdit to="/logar">

                        <Button>Fazer Login</Button>

                    </LinkEdit>

                    <LinkEdit to="/">

                        <Item>Início</Item>

                    </LinkEdit>

                    <LinkEdit to="/cardapio">

                        <Item>Cardapio</Item>

                    </LinkEdit>
                    <LinkEdit to="/cardapio">

                        <Item>Meus Pedidos</Item>

                    </LinkEdit>
                    <LinkEdit to="/contato">

                        <Item>Contato</Item>

                    </LinkEdit>
                </MenuItems>
            </MenuWrapper>
        </>
    );
};

const Button = styled.button`
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
`;

const Item = styled.h2`
  font-size: 26px;
  font-weight: 300;
  text-align: center;
  color: #6A7D8B;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #FB9400;
  }

  @media (max-width: 320px) {
    font-size: 22px;
  }

`;

const LinkEdit = styled(Link)`
    text-decoration: none;
`;

const HamburguerIcon = styled.div<{ isopen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 100000;

    span {
      width: 100%;
      height: 3px;
      margin-bottom: 5px;
      transition: transform 0.3s, opacity 0.3s;
      background: #FB9400;
    }

    & span:first-child {
      transform: translateY(${props => (props.isopen ? "8px" : "0")}) rotate(${props => (props.isopen ? "45deg" : "0")});
    }

    & span:nth-child(2) {
      opacity: ${props => (props.isopen ? "0" : "1")};
    }

    & span:last-child {
      transform: translateY(${props => (props.isopen ? "-8px" : "0")}) rotate(${props => (props.isopen ? "-45deg" : "0")});
    }
  }
`;

const MenuWrapper = styled.div<{ isopen: boolean }>`
  position: absolute;
  top: 0;
  right: ${props => (props.isopen ? "0" : "-60vw")};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #FFF;
  font-family: 'Inter', sans-serif;
  z-index: 200;
  align-items: start;
  padding: 100px 0;
  opacity: ${props => (props.isopen ? "1" : "0")};
  visibility: ${props => (props.isopen ? "visible" : "hidden")};
  transition: right 0.3s, opacity 0.3s, visibility 0.3s;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export default HamburguerMenu;