import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { CorredorService } from '../../shared/service/corredor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { error } from 'console';

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
    this.activatedRoute.params.subscribe((params) => {
      this.idCorredor = params['id'];
      if (this.idCorredor) {
        this.buscarCorredor();
      }
    });
  }

  salvar(): void {
    if (this.corredor.nome && this.corredor.responsavel) {
      if (this.idCorredor) {
        this.alterar();
      } else {
        this.inserir();
      }
    } else {
      Swal.fire('Preencha todos os campos obrigatórios!', '', 'warning');
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
        Swal.fire('Erro ao salvar um corredor!', erro.error.mensagem, 'error');
      }
    );
  }

  alterar():void {
    this.corredorService.atualizar(this.corredor).subscribe(
      (resposta) => {
        Swal.fire('Corredor atualizado com sucesso!', '', 'success');
        this.router.navigate(['/corredor/corredor-lista']);
      },
      (erro) => {
        console.log('Erro:' + erro)
        Swal.fire('Erro', erro.error.mensagem, 'error')
      }
    );
  }

  public buscarCorredor(): void {
    this.corredorService.consultarPorId(this.idCorredor).subscribe(
      (resposta) => {
        this.corredor = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao buscar um corredor!', erro, 'error');
      }
    );
  }

  voltar(): void {
    this.router.navigate(['/corredor/corredor-listagem'])
  }

}
