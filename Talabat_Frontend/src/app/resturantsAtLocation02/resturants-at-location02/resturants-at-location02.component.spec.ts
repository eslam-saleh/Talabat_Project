import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsAtLocation02Component } from './resturants-at-location02.component';

describe('ResturantsAtLocation02Component', () => {
  let component: ResturantsAtLocation02Component;
  let fixture: ComponentFixture<ResturantsAtLocation02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsAtLocation02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsAtLocation02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
