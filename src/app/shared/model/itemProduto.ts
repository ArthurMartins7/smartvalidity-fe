import { Produto } from "./produto";

export class ItemProduto {
idItemProduto: number;
lote: string;
precoCompra: number;
precoVenda: number;
dataFabricacao: Date;
dataRecebimento: Date;
dataVencimento: Date;
produto: Produto;
}
