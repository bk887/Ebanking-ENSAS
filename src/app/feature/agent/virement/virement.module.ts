import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirementRoutingModule } from './virement-routing.module';
import { VirementComponent } from './virement.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [VirementComponent],
  imports: [
    CommonModule,
    VirementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzModalModule
  ]
})
export class VirementModule { }
