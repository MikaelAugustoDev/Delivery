import HamburguerTexasImage from "../../assets/BurguerTexas.svg";
import HamburguerSalada from "../../assets/BurguerSalada.svg";
import HamburguerCheddarImage from "../../assets/BurguerCheddar.svg";
import HamburguerMax from "../../assets/BurguerMax.svg";

const HamburguerList = [
    {
        id: 1,
        nome: "Hamburguer Texas",
        preco: 25,
        ingredientes: "2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal",
        imagem: HamburguerTexasImage
    },
    {
        id: 2,
        nome: "Hamburguer Salada",
        preco: 20,
        ingredientes: "2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal",
        imagem: HamburguerSalada
    },
    {
        id: 3,
        nome: "Hamburguer Cheddar",
        preco: 22,
        ingredientes: "2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal",
        imagem: HamburguerCheddarImage
    },
    {
        id: 4,
        nome: "Hamburguer Max",
        preco: 30,
        ingredientes: "2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal",
        imagem: HamburguerMax
    }
]

export { HamburguerList }