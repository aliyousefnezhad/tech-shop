import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankGateway } from './bank-gateway';

describe('BankGateway', () => {
  let component: BankGateway;
  let fixture: ComponentFixture<BankGateway>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankGateway]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankGateway);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
