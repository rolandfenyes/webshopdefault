import {Component, Input, OnInit} from '@angular/core';
import {ProductDTO} from '../../model/product';

@Component({
  selector: 'app-overview-block',
  templateUrl: './overview-block.component.html',
  styleUrls: ['./overview-block.component.scss']
})
export class OverviewBlockComponent implements OnInit {

  @Input()
  product: ProductDTO;

  amount: number;

  constructor() { }

  ngOnInit(): void {
    this.amount = 1;
  }

  // tslint:disable-next-line:typedef
  increaseAmount() {
    this.amount += 1;
  }

  // tslint:disable-next-line:typedef
  decreaseAmount() {
    this.amount -= 1;
  }

}
