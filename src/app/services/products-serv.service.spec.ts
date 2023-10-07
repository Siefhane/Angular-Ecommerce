import { TestBed } from '@angular/core/testing';

import { ProductsServService } from './products-serv.service';

describe('ProductsServService', () => {
  let service: ProductsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
