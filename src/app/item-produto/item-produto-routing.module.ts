import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListagemComponent } from './item-listagem/item-listagem.component';
import { ItemDetalheComponent } from './item-detalhe/item-detalhe.component';

const routes: Routes = [
  {path: "", component: ItemListagemComponent},
  {path:'detalhe', component: ItemDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemProdutoRoutingModule { }
