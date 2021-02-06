import { Component, OnInit } from '@angular/core';
import {CategoryDTO} from '../../model/category';
import {DummyData} from '../../model/dummydata';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  isCollapsed = true;
  categories: CategoryDTO[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.categories = DummyData.getInstance().getCategories();
  }

  // tslint:disable-next-line:typedef
  categorySelected(domainSuffix) {
    this.router.navigateByUrl('/products/' + domainSuffix);
  }
}
