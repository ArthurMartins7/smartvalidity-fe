import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorredorRoutingModule } from './corredor-routing.module';
import { CorredorDetalheComponent } from './corredor-detalhe/corredor-detalhe.component';
import { CorredorListagemComponent } from './corredor-listagem/corredor-listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CorredorDetalheComponent,
    CorredorListagemComponent
  ],
  imports: [
    CommonModule,
    CorredorRoutingModule,
    FormsModule,
  ]
})
export class CorredorModule { }
