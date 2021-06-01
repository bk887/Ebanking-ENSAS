import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectuerRechargeTeleRoutingModule } from './effectuer-recharge-tele-routing.module';
import { EffectuerRechargeTeleComponent } from './effectuer-recharge-tele.component';


@NgModule({
  declarations: [EffectuerRechargeTeleComponent],
  imports: [
    CommonModule,
    EffectuerRechargeTeleRoutingModule
  ]
})
export class EffectuerRechargeTeleModule { }
