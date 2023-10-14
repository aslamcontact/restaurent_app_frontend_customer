import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatelogsComponent } from './product-catelogs.component';

describe('ProductCatelogsComponent', () => {
  let component: ProductCatelogsComponent;
  let fixture: ComponentFixture<ProductCatelogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCatelogsComponent]
    });
    fixture = TestBed.createComponent(ProductCatelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
