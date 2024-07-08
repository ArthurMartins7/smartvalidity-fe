import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FormsModule } from '@angular/forms';
import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorListagemComponent } from './fornecedor-listagem/fornecedor-listagem.component';



@NgModule({
  declarations: [
    FornecedorDetalheComponent,
    FornecedorListagemComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule
  ]
})
export class FornecedorModule { }
