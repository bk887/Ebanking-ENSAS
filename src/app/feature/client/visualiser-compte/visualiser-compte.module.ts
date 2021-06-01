import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualiserCompteRoutingModule } from './visualiser-compte-routing.module';
import { VisualiserCompteComponent } from './visualiser-compte.component';


@NgModule({
  declarations: [VisualiserCompteComponent],
  imports: [
    CommonModule,
    VisualiserCompteRoutingModule
  ]
})
export class VisualiserCompteModule { }
