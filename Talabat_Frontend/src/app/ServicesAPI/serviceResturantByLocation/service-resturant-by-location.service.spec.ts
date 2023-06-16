import { TestBed } from '@angular/core/testing';

import { ServiceResturantByLocationService } from './service-resturant-by-location.service';

describe('ServiceResturantByLocationService', () => {
  let service: ServiceResturantByLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceResturantByLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
