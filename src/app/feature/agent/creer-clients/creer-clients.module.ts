import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreerClientsRoutingModule } from './creer-clients-routing.module';
import { CreerClientsComponent } from './creer-clients.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreerClientsComponent],
  imports: [
    CommonModule,
    CreerClientsRoutingModule,
    NzButtonModule,
    FormsModule
  ]
})
export class CreerClientsModule { }
