import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectuerVirementRoutingModule } from './effectuer-virement-routing.module';
import { EffectuerVirementComponent } from './effectuer-virement.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NzModalModule} from "ng-zorro-antd/modal";


@NgModule({
  declarations: [EffectuerVirementComponent],
    imports: [
        CommonModule,
        EffectuerVirementRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
      NzModalModule
    ]
})
export class EffectuerVirementModule { }
