import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginClientComponent } from './login-client.component';

const routes: Routes = [{ path: '', component: LoginClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginClientRoutingModule { }
