import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererClientsComponent } from './gerer-clients.component';

const routes: Routes = [{ path: '', component: GererClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GererClientsRoutingModule { }
