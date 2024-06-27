import { Component, Renderer2 } from '@angular/core';
import { ItemProduto } from '../../shared/model/itemProduto';
import { Produto } from '../../shared/model/produto';
import { ItemProdutoService } from '../../shared/service/item-produto.service';
import { ProdutoService } from '../../shared/service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './item-detalhe.component.html',
  styleUrl: './item-detalhe.component.scss'
})
export class ItemDetalheComponent {

  public itemProduto: ItemProduto = new ItemProduto();
  public produto: Produto = new Produto();
  public idItemProduto: number;
  public itensProdutos: ItemProduto[] = [];

  constructor(private itemProdutoService: ItemProdutoService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2) { }




  }
