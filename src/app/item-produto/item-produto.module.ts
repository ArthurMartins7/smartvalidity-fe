import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemProdutoRoutingModule } from './item-produto-routing.module';
import { ItemListagemComponent } from './item-listagem/item-listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemListagemComponent
  ],
  imports: [
    CommonModule,
    ItemProdutoRoutingModule,
    FormsModule
  ]
})
export class ItemProdutoModule { }
