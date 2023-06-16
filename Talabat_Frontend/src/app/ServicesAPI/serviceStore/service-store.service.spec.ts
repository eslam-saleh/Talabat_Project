import { TestBed } from '@angular/core/testing';

import { ServiceStoreService } from './service-store.service';

describe('ServiceStoreService', () => {
  let service: ServiceStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
