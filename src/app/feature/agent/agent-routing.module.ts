import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';

const routes: Routes = [{ path: '', component: AgentComponent }, { path: 'gerer-clients', loadChildren: () => import('./gerer-clients/gerer-clients.module').then(m => m.GererClientsModule) }, { path: 'creer-clients', loadChildren: () => import('./creer-clients/creer-clients.module').then(m => m.CreerClientsModule) }, { path: 'updateAgent/:id', loadChildren: () => import('./update-agent/update-agent.module').then(m => m.UpdateAgentModule) }, { path: 'virement', loadChildren: () => import('./virement/virement.module').then(m => m.VirementModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
