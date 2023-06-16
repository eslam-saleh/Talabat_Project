import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResturantRest1DetailsComponent } from './all-resturant-rest1-details.component';

describe('AllResturantRest1DetailsComponent', () => {
  let component: AllResturantRest1DetailsComponent;
  let fixture: ComponentFixture<AllResturantRest1DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResturantRest1DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResturantRest1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
