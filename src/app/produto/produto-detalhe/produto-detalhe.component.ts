import { Produto } from './../../shared/model/produto';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../shared/model/categoria';
import { Fornecedor } from '../../shared/model/fornecedor';
import { ProdutoService } from '../../shared/service/produto.service';
import { FornecedorService } from '../../shared/service/fornecedor.service';
import { CategoriaService } from '../../shared/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  public categoria: Array<Categoria> = new Array();
  public fornecedores: Array<Fornecedor> = new Array();
  public produto: Produto = new Produto();
  public idProduto: number;

  constructor(
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buscarFornecedores();
    this.buscarCategorias();
    this.route.params.subscribe((params) => {
      this.idProduto = params['id'];
      if (this.idProduto) {
        this.buscarProduto();
      }
    });
  }

  buscarFornecedores() {
    this.fornecedorService.listarTodos().subscribe(
      (resultado) => {
        this.fornecedores = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar fornecedores' + erro);
      }
    );
  }

  buscarCategorias() {
    this.categoriaService.listarTodos().subscribe(
      (resultado) => {
        this.categoria = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar categorias' + erro);
      }
    );
  }

  buscarProduto() {
    this.produtoService.consultarPorId(this.idProduto).subscribe(
      (resultado) => {
        this.produto = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produto' + erro);
      }
    );
  }

  salvar(): void {
    if (this.produto.categoria && this.produto.codigoBarras && this.produto.descricao
      && this.produto.fornecedores && this.produto.marca
      && this.produto.quantidade && this.produto.unidadeMedida) {
      if (this.idProduto) {
        this.atualizar();
      } else {
        this.inserir();
      }
    } else {
      Swal.fire('Preencha todos os campos obrigatórios!', '', 'warning');
    }
  }

  public voltar() {
    this.router.navigate(['home/produto/produto-listagem'])
  }

  public inserir(): void {
    this.produtoService.salvar(this.produto).subscribe(
      (resposta) => {
        this.produto = resposta;
        Swal.fire('Produto cadastrado com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao cadastrar um produto!', erro.error.mensagem, 'error');
      }
    );
  }

  public atualizar(): void {
    this.produtoService.atualizar(this.produto).subscribe(
      (resposta) => {
        Swal.fire('Produto atualizado com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar o produto!', erro.error.mensagem, 'error');
      }
    );
  }
  
}
