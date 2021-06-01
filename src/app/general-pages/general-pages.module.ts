import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponentComponent } from './test-component/test-component.component';
import {FormsModule} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

const routes : Routes = [
  { path: 'blank-page', component: BlankPageComponent },
  { path: 'testComponent', component: TestComponentComponent }
]

@NgModule({
  declarations: [BlankPageComponent, TestComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    NzButtonModule
  ]
})
export class GeneralPagesModule { }
