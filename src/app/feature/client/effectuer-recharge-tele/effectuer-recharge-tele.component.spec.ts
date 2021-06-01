import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectuerRechargeTeleComponent } from './effectuer-recharge-tele.component';

describe('EffectuerRechargeTeleComponent', () => {
  let component: EffectuerRechargeTeleComponent;
  let fixture: ComponentFixture<EffectuerRechargeTeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectuerRechargeTeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectuerRechargeTeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
