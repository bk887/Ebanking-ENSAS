import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterSoldeComponent } from './consulter-solde.component';

const routes: Routes = [{ path: '', component: ConsulterSoldeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsulterSoldeRoutingModule { }
