import { useParams } from "react-router-dom";

interface Hamburguer {
    id: string;
    nome: string;
    preco: number;
    ingredientes: string;
    imagem: string;
}

interface Props {
    hamburguers: Hamburguer[];
}

const HamburguerPage = ({ hamburguers }: Props) => {

    const { id } = useParams();

    const hamburguer = hamburguers.find((hamburguer) => hamburguer.id === id);


    if (!hamburguer) {
        return <div>Este hambúrguer não existe.</div>;
    }

    return (
        <>
            <h2>{hamburguer.nome}</h2>
            <p>Preço: R${hamburguer.preco}</p>
            <p>Ingredientes: {hamburguer.ingredientes}</p>
            <img src={hamburguer.imagem} alt={hamburguer.nome} />
        </>
    );
};

export { HamburguerPage };
