import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererClientsRoutingModule } from './gerer-clients-routing.module';
import { GererClientsComponent } from './gerer-clients.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {FormsModule} from "@angular/forms";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzModalModule} from "ng-zorro-antd/modal";

@NgModule({
  declarations: [GererClientsComponent],
  imports: [
    CommonModule,
    GererClientsRoutingModule,
    NzTableModule,
    NzDropDownModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzModalModule
  ]
})
export class GererClientsModule { }
