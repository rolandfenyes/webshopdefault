import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart';

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

  constructor() { }

  ngOnInit(): void {
  }

}
