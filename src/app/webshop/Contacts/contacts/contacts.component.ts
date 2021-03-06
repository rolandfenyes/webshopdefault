import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  text: string;
  texts: string[];

  constructor() {
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus. Fringilla urna porttitor rhoncus dolor. Porttitor lacus luctus accumsan tortor posuere. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. In nibh mauris cursus mattis molestie a iaculis. Erat imperdiet sed euismod nisi porta lorem mollis. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Dictum non consectetur a erat. Quam quisque id diam vel quam elementum pulvinar. Orci eu lobortis elementum nibh tellus molestie nunc non. Diam ut venenatis tellus in. Sed vulputate mi sit amet. Consequat id porta nibh venenatis cras sed felis. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Vitae congue eu consequat ac felis donec. Molestie nunc non blandit massa enim nec dui nunc mattis. Id ornare arcu odio ut sem nulla pharetra diam sit. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Venenatis urna cursus eget nunc scelerisque viverra.\n' +
      '\n' +
      'Ipsum a arcu cursus vitae congue mauris. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Non arcu risus quis varius quam. Enim tortor at auctor urna nunc. Leo urna molestie at elementum eu facilisis. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Mauris cursus mattis molestie a iaculis. Morbi blandit cursus risus at. Tristique senectus et netus et malesuada. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Aliquam eleifend mi in nulla posuere. Diam donec adipiscing tristique risus nec feugiat. Facilisis mauris sit amet massa vitae tortor condimentum. Lectus quam id leo in vitae turpis massa sed elementum.';
    this.texts = this.text.split('\n');
  }

  ngOnInit(): void {
  }

}
