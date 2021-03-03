import { Component, OnInit } from '@angular/core';
import {DummyData} from '../../../model/dummydata';
import {ProductServiceService} from '../../../services/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  topProducts = new Array();

  constructor(private router: Router, http: HttpClient) {
    if (DummyData.getInstance().getProducts().length <= 1) {
      const productService = new ProductServiceService(http, 'http://localhost:4200');
      productService.getProducts().then(p => {
        p.forEach(product => {
          if (this.topProducts.length < 3) {
            this.topProducts.push(product);
          }
        });
      });
    }
    else {
      DummyData.getInstance().getProducts().forEach(p => {
        if (this.topProducts.length < 3) {
          this.topProducts.push(p);
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
