import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { Categoria } from '../../shared/model/categoria';
import { CategoriaService } from '../../shared/service/categoria.service';
import { CorredorService } from '../../shared/service/corredor.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoriaSeletor } from '../../shared/model/seletor/categoria';

@Component({
  selector: 'app-categoria-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './categoria-listagem.component.html',
  styleUrl: './categoria-listagem.component.scss'
})
export class CategoriaListagemComponent implements OnInit {

  public corredores: Array<Corredor> = new Array();
  public categorias: Array<Categoria> = new Array();
  public categoria: Categoria = new Categoria();
  public idCategoria: number;

  public seletor: CategoriaSeletor = new CategoriaSeletor();

  public totalPaginas: number;
  public totalRegistros: number;
  public offset: number;
  public readonly TAMANHO_PAGINA: number = 3;

  constructor(
    private categoriaService: CategoriaService,
    private corredorService: CorredorService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.consultarTodosCategorias();

    this.corredorService.listarTodos().subscribe(
      (resultado) => {
        this.corredores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos corredores', erro);
      }
    );

  }

  public consultarTodosCategorias() {
    this.categoriaService.listarTodos().subscribe(
      (resultado) => {
        this.categorias = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos as categorias', erro.error.mensagem);
      }
    );
  }

  public pesquisar() {
    console.log('Valor selecionado:', this.seletor.nomeCorredor);
    this.categoriaService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.categorias = resultado;
        this.contarRegistros()
      },
      (erro) => {
        console.error('Erro ao buscar categorias', erro.error.mensagem);
      }
    );
    this.contarPaginas()
  }

  public limpar() {
    this.seletor = new CategoriaSeletor();
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
  }

  public excluir(categoriaSelecionada: Categoria) {
    Swal.fire({
      title: 'Deseja excluir a categoria?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.categoriaService.excluir(categoriaSelecionada.idCategoria).subscribe(
          (resultado) => {
            this.consultarTodosCategorias; // Atualiza a lista após exclusão
            Swal.fire('Sucesso!', 'Excluída com sucesso.', 'success');
          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir a categoria: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editar(idCategoriaSelecionado: number) {
    this.router.navigate(['home/categoria/categoria-detalhe/', idCategoriaSelecionado]);
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

  proximaPg(){
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPg(){
    this.seletor.pagina--;
    this.pesquisar();
  }

  contarPaginas(){
    this.categoriaService.contarPaginas(this.seletor).subscribe(
      (count: number) => {
        this.totalPaginas = count
      },
      erro => {
        console.log('Erro ao contar paginas de categoria', erro.error.mensagem)
      }
    )
  }

}
