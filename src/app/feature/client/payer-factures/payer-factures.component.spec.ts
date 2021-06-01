import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerFacturesComponent } from './payer-factures.component';

describe('PayerFacturesComponent', () => {
  let component: PayerFacturesComponent;
  let fixture: ComponentFixture<PayerFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayerFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
