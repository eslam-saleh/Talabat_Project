import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersRest1Component } from './offers-rest1.component';

describe('OffersRest1Component', () => {
  let component: OffersRest1Component;
  let fixture: ComponentFixture<OffersRest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersRest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersRest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
