import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemCatogeryComponent } from './menu-item-catogery.component';

describe('MenuItemCatogeryComponent', () => {
  let component: MenuItemCatogeryComponent;
  let fixture: ComponentFixture<MenuItemCatogeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemCatogeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemCatogeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
