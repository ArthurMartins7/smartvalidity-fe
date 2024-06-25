import { Fornecedor } from "./fornecedor";

export class Endereco {
  idEndereco: number;
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  complemento: string;
  cep: string;
  fornecedor: Fornecedor;
}
