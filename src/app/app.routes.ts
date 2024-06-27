import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'item-produto',
    loadChildren:() => import('./item-produto/item-produto.module').then(m => m.ItemProdutoModule),
  },


];

