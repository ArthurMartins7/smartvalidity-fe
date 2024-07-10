import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../shared/model/categoria';
import { CategoriaService } from '../../shared/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Corredor } from '../../shared/model/corredor';
import { CorredorService } from '../../shared/service/corredor.service';

@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrls: ['./categoria-detalhe.component.scss']
})
export class CategoriaDetalheComponent implements OnInit{

  public corredores: Array<Corredor> = new Array();
  public categoria: Categoria = new Categoria();
  public idCategoria: number;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private corredorService: CorredorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCategoria = params['id'];
      if (this.idCategoria) {
        this.buscarCategoria();
      }
    });

    this.corredorService.listarTodos().subscribe(
      (resultado) => {
        this.corredores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos corredores', erro);
      }
    );
  }

  salvar(): void {
    if (this.categoria.tipo && this.categoria.corredor) {
      if (this.idCategoria) {
        this.alterar();
      } else {
        this.inserir();
      }
    } else {
      Swal.fire('Preencha todos os campos obrigatórios!', '', 'warning');
    }
  }

  public inserir(): void {
    this.categoriaService.salvar(this.categoria).subscribe(
      (resposta) => {
        this.categoria = resposta;
        Swal.fire('Categoria cadastrada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao cadastrar uma categoria!', erro.error.mensagem, 'error');
      }
    );
  }

  public alterar(): void {
    this.categoriaService.atualizar(this.categoria).subscribe(
      (resposta) => {
        Swal.fire('Categoria atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a categoria!', erro.error.mensagem, 'error');
      }
    );
  }

  public buscarCategoria(): void {
    this.categoriaService.consultarPorId(this.idCategoria).subscribe(
      (resultado) => {
        this.categoria = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar uma categoria!', erro, 'error');
      }
    );
  }

  public voltar() {
    this.router.navigate(['home/categoria/categoria-listagem']);
  }
}
