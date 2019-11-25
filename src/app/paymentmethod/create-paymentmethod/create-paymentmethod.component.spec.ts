import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentmethodComponent } from './create-paymentmethod.component';

describe('CreatePaymentmethodComponent', () => {
  let component: CreatePaymentmethodComponent;
  let fixture: ComponentFixture<CreatePaymentmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaymentmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
