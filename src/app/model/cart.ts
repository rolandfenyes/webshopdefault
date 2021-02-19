import {ProductDTO} from './product';
import {Observable} from 'rxjs';
import {NavbarComponent} from '../customcomponents/navbar/navbar.component';
import {CartPageComponent} from '../webshop/Cart/cart-page/cart-page.component';
import {recalculatePrice} from './CurrencyFormatter';

export class CartDTO {
  id: number;
  productDTOs: ProductDTO[];
}

export class Cart {

  private constructor() {
    this.productDTOs = [];
    this.priceInHUF = 0;
  }

  private static instance: Cart;
  id: number;
  productDTOs: ProductDTO[];
  priceInHUF: number;
  navbar: NavbarComponent;
  cartPage: CartPageComponent;

  public static getInstance(): Cart {
    if (!Cart.instance) {
      Cart.instance = new Cart();
    }
    return Cart.instance;
  }

  // tslint:disable-next-line:typedef
  createCart(cartDTO: CartDTO) {
    this.id = cartDTO.id;
    this.productDTOs = cartDTO.productDTOs;
    this.calculatePrice();
  }

  // tslint:disable-next-line:typedef
  setCartPageComponent(cartPage) {
    this.cartPage = cartPage;
  }

  // tslint:disable-next-line:typedef
  setNavbarComponent(navbar) {
    this.navbar = navbar;
  }

  // tslint:disable-next-line:typedef
  getProductsFromCar() {
    return this.productDTOs;
  }

  // tslint:disable-next-line:typedef
  getProductById(id: number) {
    return this.productDTOs[id];
  }

  // tslint:disable-next-line:typedef
  addToCart(product: ProductDTO) {
    this.productDTOs.push(product);
    this.calculatePrice();
    this.navbar.isCartEmpty = this.productDTOs.length === 0;
  }

  // tslint:disable-next-line:typedef
  removeFromCart(product: ProductDTO) {
    this.productDTOs.splice(this.productDTOs.indexOf(product), 1);
    this.calculatePrice();
    this.navbar.isCartEmpty = this.productDTOs.length === 0;
  }

  // tslint:disable-next-line:typedef
  calculatePrice() {
    this.priceInHUF = 0;
    this.productDTOs.forEach(product => {
      this.priceInHUF += (product.price * product.amount);
      }
    );
    try {
      this.cartPage.totalPriceInHUF = recalculatePrice(1, this.priceInHUF);
    } catch (Exception) {

    }
  }
}

