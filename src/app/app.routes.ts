import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'item-produto',
    loadChildren:() => import('./item-produto/item-produto.module').then(m => m.ItemProdutoModule),
  },
  {
    path: 'corredor',
    loadChildren:() => import('./corredor/corredor.module').then(m => m.CorredorModule),
  },

  {
    path: 'categoria',
    loadChildren:() => import('./categoria/categoria.module').then(m => m.CategoriaModule),
  },

  {
    path: 'produto',
    loadChildren:() => import('./produto/produto.module').then(m => m.ProdutoModule),
  },

  {
    path: 'fornecedor',
    loadChildren:() => import('./fornecedor/fornecedor.module').then(m => m.FornecedorModule),
  }
];

