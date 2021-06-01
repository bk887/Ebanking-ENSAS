import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffectuerVirementComponent } from './effectuer-virement.component';

const routes: Routes = [{ path: '', component: EffectuerVirementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectuerVirementRoutingModule { }
