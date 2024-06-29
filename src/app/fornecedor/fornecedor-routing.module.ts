import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';

const routes: Routes = [
  {path: "fornecedor-detalhe", component: FornecedorDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
