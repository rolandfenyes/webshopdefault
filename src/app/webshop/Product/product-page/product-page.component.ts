import {Component, OnInit} from '@angular/core';
import {Cart} from '../../../model/cart';
import {DimensionsDTO, PictureURLDTO, ProductDTO} from '../../../model/product';
import {ActivatedRoute} from '@angular/router';

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
    const product = new ProductDTO();
    const dimensions = new DimensionsDTO();
    dimensions.widthInMetre = 5.5;
    dimensions.heightInMetre = 3.2;
    dimensions.depthInMetre = 3;
    dimensions.weightInKg = 500;
    dimensions.material = 'Fa';
    product.dimensions = dimensions;
    const picture1 = new PictureURLDTO();
    const picture2 = new PictureURLDTO();
    const picture3 = new PictureURLDTO();
    const picture4 = new PictureURLDTO();
    picture1.url = '../../../../assets/jatszoter.jpg';
    picture2.url = '../../../../assets/jatszoter2.jpg';
    picture3.url = '../../../../assets/jatszoter.jpg';
    picture4.url = '../../../../assets/jatszoter2.jpg';
    product.pictureURLs = [picture1, picture2, picture3, picture4, picture1];
    product.productName = 'Nagy játszótér';
    product.id = 0;
    product.priceInHUF = 100000;
    product.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida arcu ac tortor. Felis imperdiet proin fermentum leo vel orci. Pretium lectus quam id leo in vitae turpis. Quis vel eros donec ac odio tempor orci dapibus ultrices. Justo nec ultrices dui sapien eget mi. Integer vitae justo eget magna fermentum. Volutpat ac tincidunt vitae semper quis lectus nulla. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque.\n' +
      '\n' +
      'Sapien nec sagittis aliquam malesuada bibendum. Quam elementum pulvinar etiam non. Enim facilisis gravida neque convallis a. Orci a scelerisque purus semper. Placerat vestibulum lectus mauris ultrices eros. Mollis nunc sed id semper risus in hendrerit gravida. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Varius quam quisque id diam. Adipiscing elit duis tristique sollicitudin nibh. Etiam tempor orci eu lobortis elementum. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Bibendum neque egestas congue quisque egestas diam in. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. In tellus integer feugiat scelerisque varius morbi enim nunc. Gravida cum sociis natoque penatibus et magnis. Maecenas sed enim ut sem viverra aliquet.';
    Cart.getInstance().addToCart(product);
    this.product = Cart.getInstance().getProductById(Number(this.route.snapshot.paramMap.get('id')));
  }

}
