import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPreview } from './checkout-preview';

describe('CheckoutPreview', () => {
  let component: CheckoutPreview;
  let fixture: ComponentFixture<CheckoutPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
