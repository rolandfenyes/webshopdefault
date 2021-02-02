import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = false;
  navbarDropdown = false;
  isCartEmpty: boolean;
  cartLength: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  navigateToCartPage() {
    this.router.navigateByUrl('/my-cart');
  }

}
