import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraphs',
  templateUrl: './paragraphs.component.html',
  styleUrls: ['./paragraphs.component.scss']
})
export class ParagraphsComponent implements OnInit {

  @Input()
  text: string;
  texts: string[];

  constructor() { }

  ngOnInit(): void {
    this.texts = this.text.split('\n');
  }

}
