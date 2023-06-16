import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResturantRest1MenuComponent } from './all-resturant-rest1-menu.component';

describe('AllResturantRest1MenuComponent', () => {
  let component: AllResturantRest1MenuComponent;
  let fixture: ComponentFixture<AllResturantRest1MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResturantRest1MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResturantRest1MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
