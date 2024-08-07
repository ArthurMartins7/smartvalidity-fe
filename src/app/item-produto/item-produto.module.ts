import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemProdutoRoutingModule } from './item-produto-routing.module';
import { ItemListagemComponent } from './item-listagem/item-listagem.component';
import { FormsModule } from '@angular/forms';
import { ItemDetalheComponent } from './item-detalhe/item-detalhe.component';


@NgModule({
  declarations: [
    ItemListagemComponent,
    ItemDetalheComponent
  ],
  imports: [
    CommonModule,
    ItemProdutoRoutingModule,
    FormsModule
  ]
})
export class ItemProdutoModule { }
