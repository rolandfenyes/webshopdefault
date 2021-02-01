import {ProductDTO} from './product';

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
  getProductById(id: number) {
    return this.productDTOs[id];
  }

  // tslint:disable-next-line:typedef
  addToCart(product: ProductDTO) {
    this.productDTOs.push(product);
    this.calculatePrice();
  }

  // tslint:disable-next-line:typedef
  removeFromCart(product: ProductDTO) {
    this.productDTOs.splice(this.productDTOs.indexOf(product), 1);
    this.calculatePrice();
  }

  // tslint:disable-next-line:typedef
  calculatePrice() {
    this.productDTOs.forEach(product => {
      this.priceInHUF += product.priceInHUF;
      }
    );
  }
}
