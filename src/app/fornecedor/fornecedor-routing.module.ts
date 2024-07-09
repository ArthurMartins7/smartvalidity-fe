import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorListagemComponent } from './fornecedor-listagem/fornecedor-listagem.component';

const routes: Routes = [
  {path: "fornecedor-detalhe", component: FornecedorDetalheComponent},
  {path: "fornecedor-listagem", component: FornecedorListagemComponent},
  {path:'fornecedor-detalhe/:id', component: FornecedorDetalheComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
