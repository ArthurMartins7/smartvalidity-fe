import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { CorredorService } from '../../shared/service/corredor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corredor-listagem',
  templateUrl: './corredor-listagem.component.html',
  styleUrls: ['./corredor-listagem.component.scss']
})
export class CorredorListagemComponent implements OnInit{

  public corredor: Corredor = new Corredor();
  public corredores: Corredor[] = [];
  public idCorredor: number;

  constructor(
    private corredorService: CorredorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ){ }

  ngOnInit(): void {
    this.consultarTodosCorredores();
  }

  public consultarTodosCorredores() {
    this.corredorService.listarTodos().subscribe(
      (resultado) => {
        this.corredores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os corredores', erro);
      }
    );
  }

  public pesquisar() {
    this.corredorService.consultarPorId(this.idCorredor).subscribe(
      (resultado) => {
        this.corredor = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar por id', erro);
      }
    );
  }

  public excluir(corredorSelecionado: Corredor) {
    Swal.fire({
      title: 'Deseja excluir o corredor?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.corredorService.excluir(corredorSelecionado.idCorredor).subscribe(
          (resultado) => {
            this.consultarTodosCorredores(); // Atualiza a lista após exclusão
            Swal.fire('Sucesso!', 'Excluído com sucesso.', 'success');
          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir o corredor: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editar(idCorredorSelecionado: number) {
    this.router.navigate(['/corredor/corredor-detalhe/', idCorredorSelecionado]);
  }
}
