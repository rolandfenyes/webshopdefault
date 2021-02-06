import {Component, OnInit} from '@angular/core';
import {ProductDTO} from '../../../model/product';
import {DummyData} from '../../../model/dummydata';
import {OrderEnum} from '../../../customcomponents/filter/filter.component';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: ProductDTO[];
  productsShown: ProductDTO[];
  productsPage = this;
  pageTitle: string;
  category: string;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
    this.router.events.subscribe(val => {
      if (location.path() !== this.category) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');
    if (!category) {
      this.products = DummyData.getInstance().getProducts();
      this.productsShown = this.products;
      this.pageTitle = 'Termékek';
      this.category = category;
    } else {
      const categories = DummyData.getInstance().getCategories();
      const rightCategory = categories.filter(c => c.categoryInDomain === category);
      this.products = DummyData.getInstance().getProducts().filter(p => p.categoryType === rightCategory[0].categoryName);
      this.productsShown = this.products;
      this.pageTitle = rightCategory[0].categoryName;
      this.category = '';
    }
  }

  // tslint:disable-next-line:typedef
  orderProductsBy(orderType: OrderEnum) {
    switch (orderType) {
      // tslint:disable-next-line:max-line-length
      case OrderEnum.PRICE_ORDER: this.productsShown.sort((p1, p2) => p1.priceInHUF < p2.priceInHUF ? -1 : p1.priceInHUF > p2.priceInHUF ? 1 : 0);
                                  break;
      // tslint:disable-next-line:max-line-length
      case OrderEnum.PRICE_ORDER_2: this.productsShown.sort((p1, p2) => p1.priceInHUF < p2.priceInHUF ? 1 : p1.priceInHUF > p2.priceInHUF ? -1 : 0);
                                    break;
      // tslint:disable-next-line:max-line-length
      case OrderEnum.ALPHABETIC_ORDER: this.productsShown.sort((p1, p2) => p1.productName < p2.productName ? -1 : p1.productName > p2.productName ? 1 : 0);
                                       break;
      // tslint:disable-next-line:max-line-length
      case OrderEnum.ALPHABETIC_ORDER_BACKWARD: this.productsShown.sort((p1, p2) => p1.productName < p2.productName ? 1 : p1.productName > p2.productName ? -1 : 0);
                                                break;
    }
  }

  // tslint:disable-next-line:typedef
  filterProducts(price: number, width: number, height: number, depth: number, material?: string) {
    this.productsShown = this.products.filter(p => p.priceInHUF < price &&
                                              p.dimensions.widthInMetre < width &&
                                              p.dimensions.heightInMetre < height &&
                                              p.dimensions.depthInMetre < depth);
  }

}
