import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartLineComponent } from './product-cart-line.component';

describe('ProductCartLineComponent', () => {
  let component: ProductCartLineComponent;
  let fixture: ComponentFixture<ProductCartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
