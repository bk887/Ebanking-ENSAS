import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterHistoriqueComponent } from './consulter-historique.component';

const routes: Routes = [{ path: '', component: ConsulterHistoriqueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsulterHistoriqueRoutingModule { }
