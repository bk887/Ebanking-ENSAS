import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectuerRechargeTeleRoutingModule } from './effectuer-recharge-tele-routing.module';
import { EffectuerRechargeTeleComponent } from './effectuer-recharge-tele.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [EffectuerRechargeTeleComponent],
    imports: [
        CommonModule,
        EffectuerRechargeTeleRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule
    ]
})
export class EffectuerRechargeTeleModule { }
