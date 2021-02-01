import { Component, OnInit } from '@angular/core';
import {ProductDTO} from '../../../model/product';
import {DummyData} from '../../../model/dummydata';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: ProductDTO[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.products = DummyData.getInstance().getProducts();
  }

  // tslint:disable-next-line:typedef
  navigateToProductPage(index: number) {
    this.router.navigateByUrl('product/' + index);
  }

}
