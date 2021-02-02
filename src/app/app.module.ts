import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './webshop/Product/product-page/product-page.component';
import {ImageGalleryComponent} from './customcomponents/image-gallery/image-gallery.component';
import {IvyGalleryModule} from 'angular-gallery';
import { OverviewBlockComponent } from './customcomponents/overview-block/overview-block.component';
import { DimensionsComponent } from './customcomponents/dimensions/dimensions.component';
import { ParagraphsComponent } from './customcomponents/paragraphs/paragraphs.component';
import { ProductsPageComponent } from './webshop/Product/products-page/products-page.component';
import { NavbarComponent } from './customcomponents/navbar/navbar.component';
import {NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { CartPageComponent } from './webshop/Cart/cart-page/cart-page.component';
import { ProductCartLineComponent } from './customcomponents/product-cart-line/product-cart-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ImageGalleryComponent,
    OverviewBlockComponent,
    DimensionsComponent,
    ParagraphsComponent,
    ProductsPageComponent,
    NavbarComponent,
    CartPageComponent,
    ProductCartLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyGalleryModule,
    NgbDropdownModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
