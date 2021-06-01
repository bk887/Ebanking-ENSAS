import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [{ path: '', component: ClientComponent }, { path: 'payer-factures', loadChildren: () => import('./payer-factures/payer-factures.module').then(m => m.PayerFacturesModule) }, { path: 'gerer-compte', loadChildren: () => import('./gerer-compte/gerer-compte.module').then(m => m.GererCompteModule) }, { path: 'consulter-solde', loadChildren: () => import('./consulter-solde/consulter-solde.module').then(m => m.ConsulterSoldeModule) }, { path: 'visualiser-compte', loadChildren: () => import('./visualiser-compte/visualiser-compte.module').then(m => m.VisualiserCompteModule) }, { path: 'consulter-historique', loadChildren: () => import('./consulter-historique/consulter-historique.module').then(m => m.ConsulterHistoriqueModule) }, { path: 'consulter-facture', loadChildren: () => import('./consulter-facture/consulter-facture.module').then(m => m.ConsulterFactureModule) }, { path: 'effectuer-recharge-tele', loadChildren: () => import('./effectuer-recharge-tele/effectuer-recharge-tele.module').then(m => m.EffectuerRechargeTeleModule) }, { path: 'effectuer-virement', loadChildren: () => import('./effectuer-virement/effectuer-virement.module').then(m => m.EffectuerVirementModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
