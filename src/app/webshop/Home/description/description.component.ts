import { Component, OnInit } from '@angular/core';
import {Comment, DummyComments} from '../../../model/comment';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  title = 'Fabrakadabra';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate enim nulla. Id porta nibh venenatis cras sed felis eget velit aliquet. Aenean vel elit scelerisque mauris pellentesque pulvinar. Pellentesque sit amet porttitor eget dolor. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Augue interdum velit euismod in pellentesque massa placerat. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Viverra nibh cras pulvinar mattis nunc. Maecenas volutpat blandit aliquam etiam erat velit. Blandit cursus risus at ultrices mi tempus. Enim blandit volutpat maecenas volutpat. Massa sed elementum tempus egestas sed sed risus pretium. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Nisl condimentum id venenatis a condimentum.\n' +
    '\n' +
    'Id diam maecenas ultricies mi. Enim diam vulputate ut pharetra sit amet aliquam id. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Praesent elementum facilisis leo vel fringilla. Purus sit amet luctus venenatis lectus magna. Feugiat vivamus at augue eget arcu dictum varius duis at. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Habitant morbi tristique senectus et netus et malesuada fames. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Libero volutpat sed cras ornare arcu dui. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Pharetra et ultrices neque ornare aenean euismod elementum nisi.\n' +
    '\n' +
    'At lectus urna duis convallis. Sit amet purus gravida quis blandit turpis. Volutpat odio facilisis mauris sit amet. Mauris commodo quis imperdiet massa tincidunt. Velit scelerisque in dictum non consectetur a erat nam at. Posuere morbi leo urna molestie at elementum eu facilisis sed. Integer feugiat scelerisque varius morbi enim nunc faucibus. Nec dui nunc mattis enim ut tellus elementum. Malesuada fames ac turpis egestas sed tempus. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Erat imperdiet sed euismod nisi. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Egestas diam in arcu cursus euismod. Auctor eu augue ut lectus. Sit amet mattis vulputate enim nulla aliquet. Arcu non odio euismod lacinia at quis risus sed vulputate. Amet tellus cras adipiscing enim. Laoreet sit amet cursus sit amet dictum.';
  texts: Array<string>;

  comments: Comment[];

  constructor() {
    this.texts = this.text.split('\n');
    this.comments = DummyComments.getInstance().getComments();
  }

  ngOnInit(): void {
  }

}
