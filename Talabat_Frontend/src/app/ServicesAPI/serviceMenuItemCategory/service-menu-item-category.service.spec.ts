import { TestBed } from '@angular/core/testing';

import { ServiceMenuItemCategoryService } from './service-menu-item-category.service';

describe('ServiceMenuItemCategoryService', () => {
  let service: ServiceMenuItemCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMenuItemCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
