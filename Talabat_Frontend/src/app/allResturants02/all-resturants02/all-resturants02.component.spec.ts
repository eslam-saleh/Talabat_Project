import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResturants02Component } from './all-resturants02.component';

describe('AllResturants02Component', () => {
  let component: AllResturants02Component;
  let fixture: ComponentFixture<AllResturants02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResturants02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResturants02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
