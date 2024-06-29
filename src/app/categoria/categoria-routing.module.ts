import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaListagemComponent } from './categoria-listagem/categoria-listagem.component';

const routes: Routes = [
  {path:'categoria-detalhe', component: CategoriaDetalheComponent},
  {path:'categoria-listagem', component: CategoriaListagemComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
