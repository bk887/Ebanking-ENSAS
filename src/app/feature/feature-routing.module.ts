import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureComponent} from './feature.component';


const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'agent',
        loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
