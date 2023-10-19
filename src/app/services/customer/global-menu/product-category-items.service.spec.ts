import { TestBed } from '@angular/core/testing';

import { ProductCategoryItemsService } from './product-category-items.service';

describe('ProductCategoryItemsService', () => {
  let service: ProductCategoryItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoryItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
