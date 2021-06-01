import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterFactureComponent } from './consulter-facture.component';

const routes: Routes = [{ path: '', component: ConsulterFactureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsulterFactureRoutingModule { }
