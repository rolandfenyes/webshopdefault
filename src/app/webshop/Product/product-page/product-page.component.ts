import {Component, OnInit} from '@angular/core';
import {Cart} from '../../../model/cart';
import {PictureURLDTO, ProductDTO} from '../../../model/product';
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
    product.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Posuere sollicitudin aliquam ultrices sagittis orci a. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Netus et malesuada fames ac turpis egestas integer eget aliquet. Elementum nisi quis eleifend quam adipiscing vitae. Scelerisque purus semper eget duis. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Tortor consequat id porta nibh venenatis. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Enim nec dui nunc mattis enim ut tellus elementum. Fames ac turpis egestas integer. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Dui nunc mattis enim ut tellus elementum sagittis vitae. Sapien pellentesque habitant morbi tristique. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Eget egestas purus viverra accumsan in nisl nisi.\n' +
      '\n' +
      'Mattis nunc sed blandit libero volutpat sed. Interdum velit euismod in pellentesque massa placerat duis. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Augue eget arcu dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Condimentum lacinia quis vel eros donec ac odio tempor. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Et pharetra pharetra massa massa ultricies mi. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Dui faucibus in ornare quam viverra orci sagittis.\n' +
      '\n' +
      'Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Lectus urna duis convallis convallis tellus id. Mattis enim ut tellus elementum sagittis vitae et leo. Quis hendrerit dolor magna eget est. Fringilla phasellus faucibus scelerisque eleifend donec. Quam pellentesque nec nam aliquam sem et. Venenatis cras sed felis eget velit aliquet sagittis id. Morbi quis commodo odio aenean sed. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ac tincidunt vitae semper quis lectus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Turpis egestas sed tempus urna et pharetra. Sit amet justo donec enim. Urna et pharetra pharetra massa massa ultricies mi. Quam vulputate dignissim suspendisse in. Elementum pulvinar etiam non quam lacus.\n' +
      '\n' +
      'Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sagittis id consectetur purus ut faucibus pulvinar elementum. Nulla aliquet enim tortor at. Proin fermentum leo vel orci porta non. Vel turpis nunc eget lorem dolor sed viverra. Maecenas pharetra convallis posuere morbi leo urna molestie. Arcu vitae elementum curabitur vitae nunc sed velit. Tellus cras adipiscing enim eu turpis egestas pretium aenean. In egestas erat imperdiet sed euismod. Velit scelerisque in dictum non consectetur a erat nam. Orci eu lobortis elementum nibh tellus molestie nunc non. Urna id volutpat lacus laoreet non curabitur gravida. Nec feugiat in fermentum posuere urna nec. Id neque aliquam vestibulum morbi blandit cursus. Sed euismod nisi porta lorem.\n' +
      '\n' +
      'Sapien eget mi proin sed libero enim sed faucibus turpis. Ornare massa eget egestas purus. Morbi leo urna molestie at elementum eu facilisis. Id porta nibh venenatis cras sed felis eget velit. Malesuada bibendum arcu vitae elementum curabitur vitae. Accumsan lacus vel facilisis volutpat est velit egestas. A erat nam at lectus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Posuere lorem ipsum dolor sit amet. Eget sit amet tellus cras. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Non curabitur gravida arcu ac tortor dignissim convallis. Elit duis tristique sollicitudin nibh. Bibendum ut tristique et egestas quis ipsum. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Nisi vitae suscipit tellus mauris a diam maecenas sed.';
    Cart.getInstance().addToCart(product);
    this.product = Cart.getInstance().getProductById(Number(this.route.snapshot.paramMap.get('id')));
  }

}
