import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { Categoria } from '../../shared/model/categoria';
import { Produto } from '../../shared/model/produto';
import { CategoriaService } from '../../shared/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CorredorService } from '../../shared/service/corredor.service';
import { ProdutoService } from '../../shared/service/produto.service';
import Swal from 'sweetalert2';
import { ProdutoSeletor } from '../../shared/model/seletor/produtoSeletor';

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

  public seletor: ProdutoSeletor = new ProdutoSeletor();

  public totalPaginas: number = 0;
  public totalRegistros: number;
  public offset: number;
  public readonly TAMANHO_PAGINA: number = 3;


  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private corredorService: CorredorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;

    this.consultarTodosProdutos();

    this.corredorService.listarTodos().subscribe(
      (resultado) => {
        this.corredores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos corredores', erro);
      }
    );

    this.categoriaService.listarTodos().subscribe(
      (resultado) => {
        this.categorias = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todas categorias', erro);
      }
    );

    this.contarPaginas();
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

  public pesquisar() {
    console.log('Valor selecionado(Corredor):', this.seletor.nomeCorredor);
    console.log('Valor selecionado(Categoria):', this.seletor.tipoCategoria);

    this.produtoService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.produtos = resultado;
        this.contarRegistros()
      },
      (erro) => {
        console.error('Erro ao buscar produtos', erro.error.mensagem);
      }
    );
    this.contarPaginas()
  }

  public limpar() {
    this.seletor = new ProdutoSeletor();
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
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
    this.router.navigate(['home/produto/produto-detalhe/', idProdutoSelecionado]);
  }

  contarRegistros(){
    this.categoriaService.contarRegistros(this.seletor).subscribe(
      (count: number) => {
        this.totalRegistros = count
      },
      erro => {
        console.log('Erro ao contar registros de categoria', erro.error.mensagem)
      }
    )
  }

  atualizarPaginacao() {
    this.contarPaginas();
    this.pesquisar();
  }

  proximaPg(){
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPg(){
    this.seletor.pagina--;
    this.pesquisar();
  }

  irParaPagina(indicePagina: number) {
    this.seletor.pagina = indicePagina;
    this.pesquisar();
  }

   // Método para criar um array de páginas para ser utilizado no ngFor do HTML
   criarArrayPaginas(): any[] {
    return Array(this.totalPaginas).fill(0).map((x, i) => i + 1);
  }

  public contarPaginas() {
    this.produtoService.contarPaginas(this.seletor).subscribe(
      resultado => {
        this.totalPaginas = resultado;
      },
      erro => {
        Swal.fire('Erro ao consultar total de páginas', erro.error.mensagem, 'error');
      }
    );
  }

}


