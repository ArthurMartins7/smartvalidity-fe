import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { CorredorService } from '../../shared/service/corredor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corredor-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './corredor-detalhe.component.html',
  styleUrl: './corredor-detalhe.component.scss'
})

export class CorredorDetalheComponent implements OnInit{

  public corredor: Corredor = new Corredor();
  public idCorredor: number;


  constructor(
    private corredorService: CorredorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ){ }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  salvar(): void {
    if (this.idCorredor) {
      this.alterar();
    } else {
      this.inserir();
    }
  }

  public inserir(): void {
    this.corredorService.salvar(this.corredor).subscribe(
      (resposta) => {
        this.corredor = resposta;
        Swal.fire('Corredor salvo com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar um corredor!', erro, 'error');
      }
    );
  }

  alterar() {
    this.corredorService.atualizar(this.corredor).subscribe(
      resultado => {
        Swal.fire({
          title: "Corredor editado com sucesso!",
          text: "",
          icon: "success",
          showConfirmButton: true,
          confirmButtonColor: "#ff914d"
        })
        this.voltar();
      },
      erro => {
        Swal.fire({
          title: "Erro ao editar corredor",
          html: erro.error.mensagem,
          icon: "error",
          showConfirmButton: true,
          confirmButtonColor: "#ff914d"
        })
      }
    )
  }

  voltar(): void {
    this.router.navigate(['/corredor/corredor-listagem'])
  }

}
