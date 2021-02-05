import {Component, Input, OnInit} from '@angular/core';
import {Gallery} from 'angular-gallery';
import {PictureURLDTO} from '../../model/product';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @Input()
  pictureURLDTOs!: PictureURLDTO[];

  images: {path: string}[];

  constructor(private gallery: Gallery) {}

  ngOnInit(): void {
    this.images = [];
    this.pictureURLDTOs.forEach(pictureURL => {
      this.images.push({path: pictureURL.url});
    });
  }

  // tslint:disable-next-line:typedef
  showGallery(index: number) {
    const prop = {
      images: this.images,
      index
    };
    this.gallery.load(prop);
  }

}
