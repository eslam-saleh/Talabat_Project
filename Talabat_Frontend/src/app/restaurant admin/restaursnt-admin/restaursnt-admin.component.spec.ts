import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaursntAdminComponent } from './restaursnt-admin.component';

describe('RestaursntAdminComponent', () => {
  let component: RestaursntAdminComponent;
  let fixture: ComponentFixture<RestaursntAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaursntAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaursntAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
