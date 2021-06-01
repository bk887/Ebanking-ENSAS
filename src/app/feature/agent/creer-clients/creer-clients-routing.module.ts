import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerClientsComponent } from './creer-clients.component';

const routes: Routes = [{ path: '', component: CreerClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreerClientsRoutingModule { }
