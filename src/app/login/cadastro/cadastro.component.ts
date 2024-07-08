import { Component } from '@angular/core';
import { Colaborador } from '../../shared/model/colaborador';
import { PerfilAcesso } from '../../shared/model/enums/PerfilAcesso';
import { ColaboradorService } from '../../shared/service/colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  //standalone: true,
  //imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  public colaboradores: Array<Colaborador> = new Array;
  public colaborador: Colaborador = new Colaborador()

  constructor(private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute) {}


  salvar(){
    this.colaboradorService.salvar(this.colaborador).subscribe(
      resultado => {
        Swal.fire({
          title: "Cadastro realizado com sucesso!",
          text: "",
          icon: "success",
          showConfirmButton: true,
          confirmButtonColor: "#bef264"
        })
        this.voltar();
      },
      erro => {
        Swal.fire({
          title: "Erro ao realizar cadastro",
          html: erro.error.mensagem,
          icon: "error",
          showConfirmButton: true,
          confirmButtonColor: "#bef264"
        })
      }
    )
  }

  voltar(): void{
    this.router.navigate(['/login'])
  }
}

