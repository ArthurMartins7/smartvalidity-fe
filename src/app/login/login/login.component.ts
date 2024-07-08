import { Component } from '@angular/core';
import { UsuarioDTO } from '../../shared/model/usuario.dto';
import { LoginServiceService } from '../../shared/service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from '../../shared/model/colaborador';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public dto: UsuarioDTO = new UsuarioDTO();

  constructor(private loginService: LoginServiceService,
              private router: Router,
              private route: ActivatedRoute) {}

  public realizarLogin() {
    this.loginService.autenticar(this.dto).subscribe(
      (colaboradorAutenticado: Colaborador) => {
        if(colaboradorAutenticado.idSessao){
          localStorage.setItem('usuarioAutenticado', JSON.stringify(colaboradorAutenticado));
          this.router.navigate(['/home'])
        }
      },
      (erro) => {
        console.log('Erro:' + erro)
        Swal.fire('Erro', erro.error.mensagem, 'error')
      }
    )
  }

  cadastrar(){
    this.router.navigate(['/login/cadastro'])
  }

}
