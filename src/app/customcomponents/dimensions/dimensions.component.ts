import {Component, Input, OnInit} from '@angular/core';
import {DimensionsDTO} from '../../model/product';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.scss']
})
export class DimensionsComponent implements OnInit {

  @Input()
  productDimensions: DimensionsDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
