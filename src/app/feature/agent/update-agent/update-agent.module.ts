import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAgentRoutingModule } from './update-agent-routing.module';
import { UpdateAgentComponent } from './update-agent.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [UpdateAgentComponent],
  imports: [
    CommonModule,
    UpdateAgentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzModalModule
  ]
})
export class UpdateAgentModule { }
