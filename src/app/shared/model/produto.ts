import { Categoria } from "./categoria";
import { Fornecedor } from "./fornecedor";
import { ItemProduto } from "./itemProduto";

export class Produto {
idProduto: number;
descricao: string;
marca: string;
unidadeMedida: string;
quantidade: number;
codigoBarras: string;
categoria: Categoria;
fornecedores: Array<Fornecedor>;
itemProdutos: Array<ItemProduto>;
}
