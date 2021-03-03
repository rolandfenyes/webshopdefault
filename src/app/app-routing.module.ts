import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from './webshop/Product/product-page/product-page.component';
import {ProductsPageComponent} from './webshop/Product/products-page/products-page.component';
import {CartPageComponent} from './webshop/Cart/cart-page/cart-page.component';
import {HomePageComponent} from './webshop/Home/home-page/home-page.component';

const routes: Routes = [
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/:category', component: ProductsPageComponent},
  {path: 'my-cart', component: CartPageComponent},
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
