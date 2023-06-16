import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsAccordingToLocationComponent } from './resturants-according-to-location.component';

describe('ResturantsAccordingToLocationComponent', () => {
  let component: ResturantsAccordingToLocationComponent;
  let fixture: ComponentFixture<ResturantsAccordingToLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsAccordingToLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsAccordingToLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
