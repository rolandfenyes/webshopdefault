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
import { FilterComponent } from './customcomponents/filter/filter.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './customcomponents/footer/footer.component';
import { CategoriesComponent } from './customcomponents/categories/categories.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './webshop/Home/header/header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InterceptorService} from './services/interceptor.service';
import { HomePageComponent } from './webshop/Home/home-page/home-page.component';
import { DescriptionComponent } from './webshop/Home/description/description.component';
import { ChatBubblesComponent } from './customcomponents/chat-bubbles/chat-bubbles.component';
import { CommentBubbleComponent } from './customcomponents/comment-bubble/comment-bubble.component';
import { ContactsComponent } from './webshop/Contacts/contacts/contacts.component';


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
    ProductCartLineComponent,
    FilterComponent,
    FooterComponent,
    CategoriesComponent,
    HeaderComponent,
    HomePageComponent,
    DescriptionComponent,
    ChatBubblesComponent,
    CommentBubbleComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyGalleryModule,
    NgbDropdownModule,
    NgbCollapseModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
