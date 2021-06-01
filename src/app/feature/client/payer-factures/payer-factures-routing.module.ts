import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerFacturesComponent } from './payer-factures.component';

const routes: Routes = [{ path: '', component: PayerFacturesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayerFacturesRoutingModule { }
