import {Component, Input, OnInit} from '@angular/core';
import {ProductDTO} from '../../model/product';
import {Router} from '@angular/router';

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

  ngOnInit(): void {
    this.amount = 1;
    this.recalculatePrice();
  }

  // tslint:disable-next-line:typedef
  recalculatePrice() {
    const totalPrice = this.amount * this.product.priceInHUF;
    // tslint:disable-next-line:prefer-const
    let formatter = new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      minimumFractionDigits: 0,
    });
    this.price = formatter.format(totalPrice);
  }

  // tslint:disable-next-line:typedef
  increaseAmount() {
    this.amount += 1;
    this.recalculatePrice();
  }

  // tslint:disable-next-line:typedef
  decreaseAmount() {
    if (this.amount <= 1) {
      this.amount = 1;
    } else {
      this.amount -= 1;
    }
    this.recalculatePrice();
  }

  // tslint:disable-next-line:typedef
  navigateToProductPage() {
    this.router.navigateByUrl('product/' + this.index);
  }

}
