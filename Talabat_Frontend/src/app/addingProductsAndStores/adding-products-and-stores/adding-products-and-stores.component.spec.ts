import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingProductsAndStoresComponent } from './adding-products-and-stores.component';

describe('AddingProductsAndStoresComponent', () => {
  let component: AddingProductsAndStoresComponent;
  let fixture: ComponentFixture<AddingProductsAndStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingProductsAndStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingProductsAndStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
