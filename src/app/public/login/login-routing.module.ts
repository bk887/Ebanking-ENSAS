import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent }, { path: 'login-client', loadChildren: () => import('./login-client/login-client.module').then(m => m.LoginClientModule) }, { path: 'login-agent', loadChildren: () => import('./login-agent/login-agent.module').then(m => m.LoginAgentModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
