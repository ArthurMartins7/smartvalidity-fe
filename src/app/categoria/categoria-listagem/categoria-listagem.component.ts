import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { Categoria } from '../../shared/model/categoria';
import { CategoriaService } from '../../shared/service/categoria.service';
import { CorredorService } from '../../shared/service/corredor.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private corredorService: CorredorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.consultarTodosCategorias();
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

}
