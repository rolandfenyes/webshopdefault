import {DimensionsDTO, PictureURLDTO, ProductDTO} from './product';
import {Cart} from './cart';

export class DummyData {

  private constructor() {
    this.products = [];
    for (let i = 1; i <= 10; i++) {
      this.createNewProduct(i, i);
    }
    Cart.getInstance().addToCart(this.products[0]);
    Cart.getInstance().addToCart(this.products[1]);
  }
  private static instance: DummyData;

  private products: ProductDTO[];

  // tslint:disable-next-line:typedef
  public static getInstance() {
    if (!this.instance) {
      this.instance = new DummyData();
    }
    return this.instance;
  }

  // tslint:disable-next-line:typedef
  createNewProduct(id: number, amount: number) {
    const product = new ProductDTO();
    const dimensions = new DimensionsDTO();
    dimensions.widthInMetre = 1.7;
    dimensions.heightInMetre = 2.7;
    dimensions.depthInMetre = 1.4;
    dimensions.weightInKg = 500;
    dimensions.material = 'Fa, műanyag';
    product.dimensions = dimensions;
    const picture1 = new PictureURLDTO();
    const picture2 = new PictureURLDTO();
    const picture3 = new PictureURLDTO();
    const picture4 = new PictureURLDTO();
    picture1.url = '../../../../assets/jatszoter_1.jpg';
    picture2.url = '../../../../assets/jatszoter_2.jpg';
    picture3.url = '../../../../assets/jatszoter_3.jpg';
    picture4.url = '../../../../assets/jatszoter_4.jpg';
    product.pictureURLs = [picture1, picture2, picture3, picture4, picture1];
    product.productName = 'Penthouse';
    product.id = id;
    product.priceInHUF = 230000;
    product.amount = amount;
    product.description = 'Főbb tulajdonságok:\n' +
                          ' - faház + terasz, 2 ablakkal, ajtóval\n' +
      ' - faanyag: borovi fenyő, gomba- és penészvédelemmel\n' +
      ' - csúszda: nagy, 290 cm-es\n' +
      ' - sátortető, homokozó előkészítés\n' +
      ' - minden szükséges kiegészítővel: kapaszkodók, csavartakarók, felmászó létra\n' +
      '\n' +
      'A játszótér ára 230.000 Forint + telepítés (távolságtól függően, egyeztetés alapján).\n' +
      'A csúszda és a csavartakarók színe választható!\n' +
      '\n' +
      'Választható kiegészítők:\n' +
      ' - paddá alakítható homokozó fedés (+20.000 Forint)\n' +
      ' - 80cm széles mászófal (+20,000 Forint)\n' +
      ' - dupla hintamodul akár 4 hintának (+25.000 Forint)';
    this.products.push(product);
  }

  // tslint:disable-next-line:typedef
  getProductById(id: number) {
    return this.products[id];
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    return this.products;
  }
}
