import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';

const routes: Routes = [{ path: '', component: AgentComponent }, { path: 'gerer-clients', loadChildren: () => import('./gerer-clients/gerer-clients.module').then(m => m.GererClientsModule) }, { path: 'creer-clients', loadChildren: () => import('./creer-clients/creer-clients.module').then(m => m.CreerClientsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
