import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAgentComponent } from './login-agent.component';

const routes: Routes = [{ path: '', component: LoginAgentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAgentRoutingModule { }
