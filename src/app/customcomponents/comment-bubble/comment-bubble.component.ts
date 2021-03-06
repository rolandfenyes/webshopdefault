import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../model/comment';

@Component({
  selector: 'app-comment-bubble',
  templateUrl: './comment-bubble.component.html',
  styleUrls: ['./comment-bubble.component.scss']
})
export class CommentBubbleComponent implements OnInit {

  @Input()
  comment: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
