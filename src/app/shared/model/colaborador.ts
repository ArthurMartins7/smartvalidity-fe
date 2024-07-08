import { PerfilAcesso } from "./enums/PerfilAcesso";

export class Colaborador {
  id: number;
  cpf: string;
  nome: string;
  login: string;
  senha: string;
  dataNascimento: string;
  perfil: PerfilAcesso;
  idSessao: string;
  
}
