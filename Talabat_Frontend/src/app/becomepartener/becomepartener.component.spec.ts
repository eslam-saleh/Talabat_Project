import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomepartenerComponent } from './becomepartener.component';

describe('BecomepartenerComponent', () => {
  let component: BecomepartenerComponent;
  let fixture: ComponentFixture<BecomepartenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomepartenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomepartenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
