import { BaseSeletor } from "./base.seletor";

export class ItemProdutoSeletor extends BaseSeletor {
  dataInicioFabricacao: Date;
  dataFinalFabricacao: Date;
  dataInicioVencimento: Date;
  dataFinalVencimento: Date;
  dataInicioRecebimento: Date;
  dataFinalRecebimento: Date;
  lote: string;
  nomeProduto: string;
  marca: string;
  codigoBarras: string;
  nomeCorredor: string;
  nomeCategoria: string;
}
