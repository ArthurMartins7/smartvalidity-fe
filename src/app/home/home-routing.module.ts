import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,

    children: [
      {
        path: 'corredor',
        loadChildren:() => import('../corredor/corredor.module').then(m => m.CorredorModule)
      },
      {
        path: 'categoria',
        loadChildren:() => import('../categoria/categoria.module').then(m => m.CategoriaModule)
      },
      {
        path: 'produto',
        loadChildren:() => import('../produto/produto.module').then(m => m.ProdutoModule)
      },
      {
        path: 'item-produto',
        loadChildren:() => import('../item-produto/item-produto.module').then(m => m.ItemProdutoModule)
      },
      {
        path: 'fornecedor',
        loadChildren:() => import('../fornecedor/fornecedor.module').then(m => m.FornecedorModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
