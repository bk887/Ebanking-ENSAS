import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffectuerRechargeTeleComponent } from './effectuer-recharge-tele.component';

const routes: Routes = [{ path: '', component: EffectuerRechargeTeleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectuerRechargeTeleRoutingModule { }
