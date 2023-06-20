type PropsBurguer = {
    name: string,
    valor: number,
    image: any,
    promocao?: string
}

export type { PropsBurguer };

export interface Hamburguer {
    id: number;
    nome: string;
    preco: number;
    ingredientes: string;
    imagem: string;
}