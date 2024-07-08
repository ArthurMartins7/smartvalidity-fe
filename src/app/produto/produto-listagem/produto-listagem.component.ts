import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { Categoria } from '../../shared/model/categoria';
import { Produto } from '../../shared/model/produto';
import { CategoriaService } from '../../shared/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CorredorService } from '../../shared/service/corredor.service';
import { ProdutoService } from '../../shared/service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './produto-listagem.component.html',
  styleUrl: './produto-listagem.component.scss'
})
export class ProdutoListagemComponent implements OnInit {
  public corredores: Array<Corredor> = new Array();
  public categorias: Array<Categoria> = new Array();
  public produtos: Array<Produto> = new Array();

  public produto: Produto = new Produto();
  public idProduto: number;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private corredorService: CorredorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.consultarTodosProdutos();
  }


  public consultarTodosProdutos() {
    this.produtoService.listarTodos().subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os produtos', erro.error.mensagem);
      }
    );
  }

  public excluir(produtoSelecionado: Produto) {
    Swal.fire({
      title: 'Deseja excluir o produto?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.produtoService.excluir(produtoSelecionado.idProduto).subscribe(
          (resultado) => {
            this.consultarTodosProdutos; // Atualiza a lista após exclusão
            Swal.fire('Sucesso!', 'Excluído com sucesso.', 'success');
          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir o produto: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editar(idProdutoSelecionado: number) {
    this.router.navigate(['/produto/produto-detalhe/', idProdutoSelecionado]);
  }

}


