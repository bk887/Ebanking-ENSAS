import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterFactureRoutingModule } from './consulter-facture-routing.module';
import { ConsulterFactureComponent } from './consulter-facture.component';


@NgModule({
  declarations: [ConsulterFactureComponent],
  imports: [
    CommonModule,
    ConsulterFactureRoutingModule
  ]
})
export class ConsulterFactureModule { }
