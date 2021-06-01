import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualiserCompteComponent } from './visualiser-compte.component';

const routes: Routes = [{ path: '', component: VisualiserCompteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualiserCompteRoutingModule { }
