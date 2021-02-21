import { Component } from '@angular/core';
import {LoaderService} from './services/loader.service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webshopdefault';

  color: ThemePalette = 'primary';

  constructor(public loaderService: LoaderService) {
  }
}
