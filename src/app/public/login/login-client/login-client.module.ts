import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginClientRoutingModule } from './login-client-routing.module';
import { LoginClientComponent } from './login-client.component';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginClientComponent],
  imports: [
    CommonModule,
    LoginClientRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginClientModule { }
