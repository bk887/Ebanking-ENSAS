import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAgentRoutingModule } from './login-agent-routing.module';
import { LoginAgentComponent } from './login-agent.component';


@NgModule({
  declarations: [LoginAgentComponent],
  imports: [
    CommonModule,
    LoginAgentRoutingModule
  ]
})
export class LoginAgentModule { }
