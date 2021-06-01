import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterSoldeRoutingModule } from './consulter-solde-routing.module';
import { ConsulterSoldeComponent } from './consulter-solde.component';


@NgModule({
  declarations: [ConsulterSoldeComponent],
  imports: [
    CommonModule,
    ConsulterSoldeRoutingModule
  ]
})
export class ConsulterSoldeModule { }
