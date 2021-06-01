import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererCompteComponent } from './gerer-compte.component';

const routes: Routes = [{ path: '', component: GererCompteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GererCompteRoutingModule { }
