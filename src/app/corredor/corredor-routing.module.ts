import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorredorDetalheComponent } from './corredor-detalhe/corredor-detalhe.component';
import { CorredorListagemComponent } from './corredor-listagem/corredor-listagem.component';

const routes: Routes = [
  {path:'corredor-listagem', component: CorredorListagemComponent},
  {path:'corredor-detalhe', component: CorredorDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorredorRoutingModule { }
