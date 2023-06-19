import { useParams } from "react-router-dom";
import { HamburguerList } from "../../components/hamburguersList";

interface Hamburguer {
  id: number;
  nome: string;
  preco: number;
  ingredientes: string;
  imagem: string;
}

const HamburguerPage = () => {
  const { id } = useParams();
  const hamburguer: Hamburguer | undefined = HamburguerList.find((item) => item.id === parseInt(id as string));

  if (!hamburguer) {
    return <div>Hambúrguer não encontrado.</div>;
  }

  return (
    <div>
      <h2>{hamburguer.nome}</h2>
      <p>Preço: R$ {hamburguer.preco}</p>
      <p>Ingredientes: {hamburguer.ingredientes}</p>
      {/* Exiba outras informações do hambúrguer aqui */}
    </div>
  );
};

export { HamburguerPage };
