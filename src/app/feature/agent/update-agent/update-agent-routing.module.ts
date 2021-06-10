import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAgentComponent } from './update-agent.component';

const routes: Routes = [{ path: '', component: UpdateAgentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAgentRoutingModule { }
