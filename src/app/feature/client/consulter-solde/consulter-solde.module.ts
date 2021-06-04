import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterSoldeRoutingModule } from './consulter-solde-routing.module';
import { ConsulterSoldeComponent } from './consulter-solde.component';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { ChartsModule } from 'ng2-charts';
import {ChartsDemoModule} from '../../../charts/charts.module';

@NgModule({
  declarations: [ConsulterSoldeComponent],
  imports: [
    CommonModule,
    ConsulterSoldeRoutingModule,
    NzStatisticModule,
    ChartsModule,
    ChartsDemoModule
  ]
})
export class ConsulterSoldeModule {

  constructor() { }

}
