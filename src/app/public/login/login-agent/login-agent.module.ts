import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAgentRoutingModule } from './login-agent-routing.module';
import { LoginAgentComponent } from './login-agent.component';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginAgentComponent],
  imports: [
    CommonModule,
    LoginAgentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginAgentModule { }
