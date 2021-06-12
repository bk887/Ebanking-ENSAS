import {Component, Inject, OnInit} from '@angular/core';
import {ClientService} from '../../../core/service/client/client.service';
import {Transaction} from '../../../core/model/Transaction.model';
import {Client} from '../../../core/model/Client.model';
import {History} from '../../../core/model/History.model';
import {Session} from '../../../utils/session-utils';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-consulter-historique',
  templateUrl: './consulter-historique.component.html',
  styleUrls: ['./consulter-historique.component.scss']
})
export class ConsulterHistoriqueComponent implements OnInit {

  // private  transactions: Transaction[] = new Array<Transaction>();
  // private history: History = new History();
  private client: Client = new Client();
  private clientFromDb: Client = new Client();
  private listTransactions: Transaction[];

  constructor(private clientService: ClientService, @Inject(DOCUMENT) private document: Document) {
    this.client = Session.retrieve("connectedClient");
    if( this.client == null ) {
      // alert("pas connecter");
      window.location.href = 'http://localhost:4200/login/login-client';
    }
  }S

  ngOnInit(): void {
   this.getClients()
  }

  private getClients() {
    this.clientService.getTransactions(this.client.id).subscribe(data => {
    this.listTransactions = data;
    });

  }

}
