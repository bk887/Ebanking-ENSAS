import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererClientsRoutingModule } from './gerer-clients-routing.module';
import { GererClientsComponent } from './gerer-clients.component';


@NgModule({
  declarations: [GererClientsComponent],
  imports: [
    CommonModule,
    GererClientsRoutingModule
  ]
})
export class GererClientsModule { }
