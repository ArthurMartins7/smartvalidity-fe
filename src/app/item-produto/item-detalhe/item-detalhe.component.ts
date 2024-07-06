import { Component, OnInit, Renderer2 } from '@angular/core';
import { ItemProduto } from '../../shared/model/itemProduto';
import { Produto } from '../../shared/model/produto';
import { ItemProdutoService } from '../../shared/service/item-produto.service';
import { ProdutoService } from '../../shared/service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './item-detalhe.component.html',
  styleUrl: './item-detalhe.component.scss'
})
export class ItemDetalheComponent implements OnInit{

  public produto: Array<Produto> = new Array();
  public itemProduto: ItemProduto = new ItemProduto();
  public idItemProduto: number;

  constructor(
    private itemProdutoService: ItemProdutoService,
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idItemProduto = params['id'];

    });

    this.produtoService.listarTodos().subscribe(
      (resultado) => {
        this.produto = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos itens', erro);
      }
    );
  }

  salvar(): void {
    if (this.itemProduto.produto && this.itemProduto.precoVenda &&
      this.itemProduto.precoCompra && this.itemProduto.lote &&
      this.itemProduto.dataVencimento && this.itemProduto.dataRecebimento &&
      this.itemProduto.dataFabricacao
    ) {
      if (this.idItemProduto) {
        this.alterar();
      } else {
        this.inserir();
      }
    } else {
      Swal.fire('Preencha todos os campos obrigatórios!', '', 'warning');
    }
  }

  public inserir(): void {
    this.itemProdutoService.salvar(this.itemProduto).subscribe(
      (resposta) => {
        this.itemProduto = resposta;
        Swal.fire('Item cadastrado com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao cadastrar um item!', erro.error.mensagem, 'error');
      }
    );
  }
  public alterar(): void {
    this.itemProdutoService.atualizar(this.itemProduto).subscribe(
      (resposta) => {
        Swal.fire('Item atualizado com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar o item!', erro.error.mensagem, 'error');
      }
    );
  }


  public voltar() {
    this.router.navigate(['/categorias']);
  }

  }


