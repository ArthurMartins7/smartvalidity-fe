import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home/home.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [ RodapeComponent, ],
  exports: [ RodapeComponent, ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
