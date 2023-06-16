import { TestBed } from '@angular/core/testing';

import { RestaurantCatogeryService } from './restaurant-catogery.service';

describe('RestaurantCatogeryService', () => {
  let service: RestaurantCatogeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantCatogeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
