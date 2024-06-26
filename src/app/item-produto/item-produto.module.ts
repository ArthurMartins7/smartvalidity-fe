import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemProdutoRoutingModule } from './item-produto-routing.module';
import { ItemProdutoListagemComponent } from './item-produto-listagem/item-produto-listagem.component';
import { ItemProdutoDetalheComponent } from './item-produto-detalhe/item-produto-detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemProdutoListagemComponent,
    ItemProdutoDetalheComponent
  ],
  imports: [
    CommonModule,
    ItemProdutoRoutingModule,
    FormsModule
  ]
})
export class ItemProdutoModule { }
