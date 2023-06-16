import { TestBed } from '@angular/core/testing';

import { SeviceMenuItemService } from './sevice-menu-item.service';

describe('SeviceMenuItemService', () => {
  let service: SeviceMenuItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeviceMenuItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
