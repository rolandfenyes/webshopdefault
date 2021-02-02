import { Component, OnInit } from '@angular/core';
import {Cart} from '../../../model/cart';
import {DummyData} from '../../../model/dummydata';
import {recalculatePrice} from '../../../model/CurrencyFormatter';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  // TODO dynamic refresh

  productsInCart = Cart.getInstance().getProductsFromCar();
  totalPriceInHUF: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    DummyData.getInstance();
    this.totalPriceInHUF = recalculatePrice(1, Cart.getInstance().priceInHUF);
  }

  // tslint:disable-next-line:typedef
  navigateToPage(page: string) {
    this.router.navigateByUrl('/' + page);
  }

}
