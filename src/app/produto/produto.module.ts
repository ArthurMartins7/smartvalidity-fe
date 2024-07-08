import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoDetalheComponent,
    ProdutoListagemComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule
  ]
})
export class ProdutoModule { }
