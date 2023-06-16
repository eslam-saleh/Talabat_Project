import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsAtLocation01Component } from './resturants-at-location01.component';

describe('ResturantsAtLocation01Component', () => {
  let component: ResturantsAtLocation01Component;
  let fixture: ComponentFixture<ResturantsAtLocation01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsAtLocation01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsAtLocation01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
