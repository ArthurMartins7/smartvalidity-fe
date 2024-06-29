import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FormsModule } from '@angular/forms';
import { FornecedorRoutingModule } from './fornecedor-routing.module';



@NgModule({
  declarations: [
    FornecedorDetalheComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule
  ]
})
export class FornecedorModule { }
