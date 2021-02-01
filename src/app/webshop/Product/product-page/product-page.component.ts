import {Component, OnInit} from '@angular/core';
import {Cart} from '../../../model/cart';
import {DimensionsDTO, PictureURLDTO, ProductDTO} from '../../../model/product';
import {ActivatedRoute} from '@angular/router';
import {DummyData} from '../../../model/dummydata';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: ProductDTO;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = DummyData.getInstance().getProductById(Number(this.route.snapshot.paramMap.get('id')));
  }

}
