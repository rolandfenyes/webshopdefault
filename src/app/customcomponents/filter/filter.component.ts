import { Component, OnInit } from '@angular/core';
import {recalculatePrice} from '../../model/CurrencyFormatter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterEnum = FilterEnum;
  materialEnum = MaterialType;
  public orderEnum = OrderEnum;

  priceNumber: number;
  price: string;
  widthNumber: number;
  heightNumber: number;
  depthNumber: number;
  materialType: MaterialType;
  orderType: OrderEnum;

  constructor() { }

  ngOnInit(): void {
    this.widthNumber = 1.5;
    this.heightNumber = 1.5;
    this.depthNumber = 1.5;
    this.price = recalculatePrice(1, 150000);
    this.orderType = OrderEnum.PRICE_ORDER;
  }


  // tslint:disable-next-line:typedef
  onRangeValueChange(event: any, filterType: FilterEnum) {
    const value = event;
    switch (filterType) {
      case FilterEnum.PRICE: this.price = recalculatePrice(1, value);
                             break;
      case FilterEnum.WIDTH: this.widthNumber = event;
                             break;
      case FilterEnum.HEIGHT: this.heightNumber = event;
                              break;
      case FilterEnum.DEPTH: this.depthNumber = event;
                             break;
    }
  }

  // tslint:disable-next-line:typedef
  materialTypeValueChange() {

  }

  // tslint:disable-next-line:typedef
  orderTypeValueChanged() {

  }

}

export enum OrderEnum {
  ALPHABETIC_ORDER = 'Név, A - Z',
  ALPHABETIC_ORDER_BACKWARD = 'Név, Z - A',
  PRICE_ORDER = 'Ár, alacsony -> magas',
  PRICE_ORDER_2 = 'Ár, magas -> alacsony'
}

export enum MaterialType {
  WOOD = 'Fa',
  PLASTIC = 'Műanyag'
}

export enum FilterEnum {
  PRICE,
  WIDTH,
  HEIGHT,
  DEPTH
}
