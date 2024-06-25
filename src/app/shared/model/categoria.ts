import { Corredor } from "./corredor";
import { Produto } from "./produto";

export class Categoria {
  idCategoria: number;
  tipo: string;
  corredor: Corredor;
  produtos: Array<Produto>;
}
