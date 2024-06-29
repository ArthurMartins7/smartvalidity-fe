import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { FormsModule } from '@angular/forms';
import { CategoriaListagemComponent } from './categoria-listagem/categoria-listagem.component';


@NgModule({
  declarations: [
    CategoriaDetalheComponent,
    CategoriaListagemComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule
  ]
})
export class CategoriaModule { }
