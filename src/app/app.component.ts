import { Component } from '@angular/core';
import {LoaderService} from './services/loader.service';
import {ThemePalette} from '@angular/material/core';
import {DummyData} from './model/dummydata';
import {ProductServiceService} from './services/product-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webshopdefault';

  color: ThemePalette = 'primary';

  constructor(public loaderService: LoaderService, http: HttpClient) {
    if (DummyData.getInstance().getProducts().length <= 1) {
      const productService = new ProductServiceService(http, 'http://localhost:4200');
      productService.getProducts().then(p => {
        DummyData.getInstance().setProducts(p);
      });
    }
  }
}
