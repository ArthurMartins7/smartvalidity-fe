import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemProdutoRoutingModule } from './item-produto-routing.module';
import { ItemProdutoListagemComponent } from './item-produto-listagem/item-produto-listagem.component';
import { ItemProdutoDetalheComponent } from './item-produto-detalhe/item-produto-detalhe.component';


@NgModule({
  declarations: [
    ItemProdutoListagemComponent,
    ItemProdutoDetalheComponent
  ],
  imports: [
    CommonModule,
    ItemProdutoRoutingModule
  ]
})
export class ItemProdutoModule { }
