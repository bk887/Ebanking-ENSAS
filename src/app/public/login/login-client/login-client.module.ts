import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginClientRoutingModule } from './login-client-routing.module';
import { LoginClientComponent } from './login-client.component';


@NgModule({
  declarations: [LoginClientComponent],
  imports: [
    CommonModule,
    LoginClientRoutingModule
  ]
})
export class LoginClientModule { }
