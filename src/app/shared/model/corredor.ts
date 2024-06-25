import { Categoria } from "./categoria";

export class Corredor {
  idCorredor: number;
  nome: string;
  responsavel: string;
  categorias: Array<Categoria>;
}
