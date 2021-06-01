import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterHistoriqueRoutingModule } from './consulter-historique-routing.module';
import { ConsulterHistoriqueComponent } from './consulter-historique.component';


@NgModule({
  declarations: [ConsulterHistoriqueComponent],
  imports: [
    CommonModule,
    ConsulterHistoriqueRoutingModule
  ]
})
export class ConsulterHistoriqueModule { }
