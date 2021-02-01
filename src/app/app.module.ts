import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './webshop/Product/product-page/product-page.component';
import {ImageGalleryComponent} from './customcomponents/image-gallery/image-gallery.component';
import {IvyGalleryModule} from 'angular-gallery';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
