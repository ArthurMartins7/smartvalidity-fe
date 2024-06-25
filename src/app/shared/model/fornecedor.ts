import { Endereco } from "./endereco";

export class Fornecedor {
  idFornecedor: number;
  nome: string;
  telefone: string;
  cnpj: string;
  enderecos: Array<Endereco>;
}
