import { Component, OnInit } from '@angular/core';
import {Cart} from '../../../model/cart';
import {DummyData} from '../../../model/dummydata';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  productsInCart = Cart.getInstance().getProductsFromCar();

  constructor() { }

  ngOnInit(): void {
    DummyData.getInstance();
  }

}
