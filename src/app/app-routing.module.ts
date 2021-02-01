import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from './webshop/Product/product-page/product-page.component';
import {ProductsPageComponent} from './webshop/Product/products-page/products-page.component';

const routes: Routes = [
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'products', component: ProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
