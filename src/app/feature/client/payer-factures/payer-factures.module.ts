import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayerFacturesRoutingModule } from './payer-factures-routing.module';
import { PayerFacturesComponent } from './payer-factures.component';


@NgModule({
  declarations: [PayerFacturesComponent],
  imports: [
    CommonModule,
    PayerFacturesRoutingModule
  ]
})
export class PayerFacturesModule { }
