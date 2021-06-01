import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectuerVirementRoutingModule } from './effectuer-virement-routing.module';
import { EffectuerVirementComponent } from './effectuer-virement.component';


@NgModule({
  declarations: [EffectuerVirementComponent],
  imports: [
    CommonModule,
    EffectuerVirementRoutingModule
  ]
})
export class EffectuerVirementModule { }
