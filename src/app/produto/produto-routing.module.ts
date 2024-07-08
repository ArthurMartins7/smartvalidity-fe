import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';

const routes: Routes = [
  {path:'produto-listagem', component: ProdutoListagemComponent},
  {path:'produto-detalhe', component: ProdutoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
