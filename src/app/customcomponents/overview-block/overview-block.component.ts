import {Component, Input, OnInit} from '@angular/core';
import {ProductDTO} from '../../model/product';
import {Router} from '@angular/router';
import {Cart} from '../../model/cart';
import {recalculatePrice} from '../../model/CurrencyFormatter';

@Component({
  selector: 'app-overview-block',
  templateUrl: './overview-block.component.html',
  styleUrls: ['./overview-block.component.scss']
})
export class OverviewBlockComponent implements OnInit {

  @Input()
  product: ProductDTO;

  @Input()
  onProductsPage: boolean;

  @Input()
  index: number;

  amount: number;
  price: string;

  constructor(private router: Router) { }

  // @ts-ignore
  ngOnInit(amount, priceInHUF): void {
    this.amount = 1;
    this.price = recalculatePrice(this.amount, this.product.price);
  }

  // tslint:disable-next-line:typedef
  increaseAmount() {
    this.amount += 1;
    this.product.amount += 1;
    this.price = recalculatePrice(this.amount, this.product.price);
  }

  // tslint:disable-next-line:typedef
  decreaseAmount() {
    if (this.amount <= 1) {
      this.amount = 1;
      this.product.amount = 1;
    } else {
      this.amount -= 1;
      this.product.amount -= 1;
    }
    this.price = recalculatePrice(this.amount, this.product.price);
  }

  // tslint:disable-next-line:typedef
  navigateToProductPage() {
    this.router.navigateByUrl('product/' + this.product.id);
  }

  // tslint:disable-next-line:typedef
  addElementToCart() {
    console.log(this.product.amount);
    Cart.getInstance().addToCart(this.product);
  }

}
