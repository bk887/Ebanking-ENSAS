import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirementComponent } from './virement.component';

const routes: Routes = [{ path: '', component: VirementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirementRoutingModule { }
