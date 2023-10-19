import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryItensComponent } from './product-category-itens.component';

describe('ProductCategoryItensComponent', () => {
  let component: ProductCategoryItensComponent;
  let fixture: ComponentFixture<ProductCategoryItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryItensComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
