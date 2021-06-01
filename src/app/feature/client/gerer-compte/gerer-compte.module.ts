import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererCompteRoutingModule } from './gerer-compte-routing.module';
import { GererCompteComponent } from './gerer-compte.component';


@NgModule({
  declarations: [GererCompteComponent],
  imports: [
    CommonModule,
    GererCompteRoutingModule
  ]
})
export class GererCompteModule { }
