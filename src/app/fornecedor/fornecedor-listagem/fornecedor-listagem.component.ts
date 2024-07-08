import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../shared/model/fornecedor';
import { FornecedorService } from '../../shared/service/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fornecedor-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './fornecedor-listagem.component.html',
  styleUrl: './fornecedor-listagem.component.scss'
})
export class FornecedorListagemComponent implements OnInit {

  public fornecedor: Fornecedor = new Fornecedor();
  public fornecedores: Fornecedor[] = [];
  public idFornecedor: number;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ){ }

  ngOnInit(): void {
    this.consultarTodosFornecedores();
  }

  public consultarTodosFornecedores() {
    this.fornecedorService.listarTodos().subscribe(
      (resultado) => {
        this.fornecedores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os fornecedores', erro);
      }
    );
  }

  public pesquisar() {
    this.fornecedorService.consultarPorId(this.idFornecedor).subscribe(
      (resultado) => {
        this.fornecedor = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar por id', erro);
      }
    );
  }

  public excluir(fornecedorSelecionado: Fornecedor) {
    Swal.fire({
      title: 'Deseja excluir o fornecedor?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.fornecedorService.excluir(fornecedorSelecionado.idFornecedor).subscribe(
          (resultado) => {
            this.consultarTodosFornecedores(); // Atualiza a lista após exclusão
            Swal.fire('Sucesso!', 'Excluído com sucesso.', 'success');
          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir o fornecedor: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editar(idFornecedorSelecionado: number) {
    this.router.navigate(['/fornecedor/fornecedor-detalhe/', idFornecedorSelecionado]);
  }

}
