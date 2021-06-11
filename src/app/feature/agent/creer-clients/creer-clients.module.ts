import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreerClientsRoutingModule} from './creer-clients-routing.module';
import {CreerClientsComponent} from './creer-clients.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [CreerClientsComponent],
  imports: [
    CommonModule,
    CreerClientsRoutingModule,
    NzButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NzModalModule
  ]
})
export class CreerClientsModule {
}
