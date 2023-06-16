import { TestBed } from '@angular/core/testing';

import { AlertifyNotificationServiveService } from './alertify-notification-servive.service';

describe('AlertifyNotificationServiveService', () => {
  let service: AlertifyNotificationServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyNotificationServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
