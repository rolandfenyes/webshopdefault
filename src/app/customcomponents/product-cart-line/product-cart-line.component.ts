import {Component, Input, OnInit} from '@angular/core';
import {ProductDTO} from '../../model/product';
import {recalculatePrice} from '../../model/CurrencyFormatter';
import {Router} from '@angular/router';
import {Cart} from '../../model/cart';

@Component({
  selector: 'app-product-cart-line',
  templateUrl: './product-cart-line.component.html',
  styleUrls: ['./product-cart-line.component.scss']
})
export class ProductCartLineComponent implements OnInit {

  @Input()
  product: ProductDTO;

  price: string;
  priceInTotal: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.price = recalculatePrice(1, this.product.price);
    this.priceInTotal = recalculatePrice(this.product.amount, this.product.price);
  }

  // tslint:disable-next-line:typedef
  increaseAmount() {
    this.product.amount += 1;
    this.priceInTotal = recalculatePrice(this.product.amount, this.product.price);
    Cart.getInstance().calculatePrice();
  }

  // tslint:disable-next-line:typedef
  decreaseAmount() {
    if (this.product.amount <= 1) {
      this.product.amount = 1;
    } else {
      this.product.amount -= 1;
    }
    this.priceInTotal = recalculatePrice(this.product.amount, this.product.price);
    Cart.getInstance().calculatePrice();
  }

  // tslint:disable-next-line:typedef
  navigateToProductPage() {
    this.router.navigateByUrl('product/' + this.product.id);
  }

  // tslint:disable-next-line:typedef
  removeProductFromCart() {
    Cart.getInstance().removeFromCart(this.product);
  }

}
