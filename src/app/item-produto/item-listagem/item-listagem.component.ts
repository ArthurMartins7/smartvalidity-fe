import { Component, OnInit } from '@angular/core';
import { ItemProduto } from '../../shared/model/itemProduto';
import { ItemProdutoSeletor } from '../../shared/model/seletor/itemProduto.seletor';
import { Produto } from '../../shared/model/produto';
import { ItemProdutoService } from '../../shared/service/item-produto.service';
import { ProdutoService } from '../../shared/service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-listagem',
  templateUrl: './item-listagem.component.html',
  styleUrls: ['./item-listagem.component.scss'] // Correção no nome do atributo
})
export class ItemListagemComponent implements OnInit {

  itemProduto: ItemProduto[] = [];
  idItemProduto: number;
  seletor: ItemProdutoSeletor = new ItemProdutoSeletor();
  produto: Produto[] = [];
  totalPaginas: number = 0;
  readonly TAMANHO_PAGINA: number = 3;

  constructor(
    private itemProdutoService: ItemProdutoService,
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idItemProduto = params['id'];
    });

    this.produtoService.listarTodos().subscribe(
      resultado => {
        this.produto = resultado;
      },
      erro => {
        console.error('Erro ao consultar todos os produtos', erro);
      }
    );

    // Inicialize o seletor aqui se necessário
    // this.seletor = new ItemProdutoSeletor();
  }

  pesquisar(): void {
    this.itemProdutoService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.itemProduto = resultado;
      },
      erro => {
        console.error('Erro ao consultar por seletor', erro);
      }
    );
  }

  limpar(): void {
    this.seletor = new ItemProdutoSeletor();
  }

  atualizar(idItemProdutoSelecionado: number): void {
    this.router.navigate(['/itemProduto/detalhe/', idItemProdutoSelecionado]);
  }

  excluir(itemProdutoSelecionado: ItemProduto): void {
    Swal.fire({
      title: 'Deseja excluir o Item?',
      text: 'Esta ação não poderá ser desfeita.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.itemProdutoService.excluir(itemProdutoSelecionado.idItemProduto).subscribe(
          () => {
            this.pesquisar();
            Swal.fire('Sucesso!', 'Item excluído com sucesso!', 'success');
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir item: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  contarPaginas(): void {
    this.itemProdutoService.contarPaginas(this.seletor).subscribe(
      resultado => {
        this.totalPaginas = resultado;
      },
      erro => {
        Swal.fire('Erro!', 'Erro ao consultar total de páginas: ' + erro.error.mensagem, 'error');
      }
    );
  }

  atualizarPaginacao(): void {
    this.contarPaginas();
    this.pesquisar();
  }

  avancarPagina(): void {
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPagina(): void {
    this.seletor.pagina--;
    this.pesquisar();
  }

  irParaPagina(indicePagina: number): void {
    this.seletor.pagina = indicePagina;
    this.pesquisar();
  }

  criarArrayPaginas(): number[] {
    return Array(this.totalPaginas).fill(0).map((x, i) => i + 1);
  }

}
