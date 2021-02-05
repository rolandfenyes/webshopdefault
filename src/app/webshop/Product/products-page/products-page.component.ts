import {Component, OnInit} from '@angular/core';
import {ProductDTO} from '../../../model/product';
import {DummyData} from '../../../model/dummydata';
import {OrderEnum} from '../../../customcomponents/filter/filter.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: ProductDTO[];
  productsPage = this;

  constructor() { }

  ngOnInit(): void {
    this.products = DummyData.getInstance().getProducts();
  }

  // tslint:disable-next-line:typedef
  orderProductsBy(orderType: OrderEnum) {
    switch (orderType) {
      // tslint:disable-next-line:max-line-length
      case OrderEnum.PRICE_ORDER: this.products.sort((p1, p2) => p1.priceInHUF < p2.priceInHUF ? -1 : p1.priceInHUF > p2.priceInHUF ? 1 : 0);
                                  break;
      // tslint:disable-next-line:max-line-length
      case OrderEnum.PRICE_ORDER_2: this.products.sort((p1, p2) => p1.priceInHUF < p2.priceInHUF ? 1 : p1.priceInHUF > p2.priceInHUF ? -1 : 0);
                                    break;
      // tslint:disable-next-line:max-line-length
      case OrderEnum.ALPHABETIC_ORDER: this.products.sort((p1, p2) => p1.productName < p2.productName ? -1 : p1.productName > p2.productName ? 1 : 0);
                                       break;
      // tslint:disable-next-line:max-line-length
      case OrderEnum.ALPHABETIC_ORDER_BACKWARD: this.products.sort((p1, p2) => p1.productName < p2.productName ? 1 : p1.productName > p2.productName ? -1 : 0);
                                                break;
    }
  }

}
