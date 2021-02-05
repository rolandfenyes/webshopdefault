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
  isCartEmpty = Cart.getInstance().getProductsFromCar().length === 0;
  cartLength: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    Cart.getInstance().setNavbarComponent(this);
  }

  // tslint:disable-next-line:typedef
  navigateToCartPage() {
    this.router.navigateByUrl('/my-cart');
  }

  // tslint:disable-next-line:typedef
  navigateToPage(page: string) {
    this.router.navigateByUrl('/' + page);
  }

}
