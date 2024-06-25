import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ItemProdutoListagemComponent } from './item-produto-listagem/item-produto-listagem.component';
import { ItemProdutoDetalheComponent } from './item-produto-detalhe/item-produto-detalhe.component';

const routes: Routes = [
  {path: "", component: ItemProdutoListagemComponent},
  {path: "", component: ItemProdutoDetalheComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemProdutoRoutingModule { }
