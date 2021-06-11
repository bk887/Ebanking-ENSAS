import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../core/service/client/client.service';
import {Transaction} from '../../../core/model/Transaction.model';
import {Client} from '../../../core/model/Client.model';
import {History} from '../../../core/model/History.model';
import {Session} from '../../../utils/session-utils';

@Component({
  selector: 'app-consulter-historique',
  templateUrl: './consulter-historique.component.html',
  styleUrls: ['./consulter-historique.component.scss']
})
export class ConsulterHistoriqueComponent implements OnInit {

  // private  transactions: Transaction[] = new Array<Transaction>();
  // private history: History = new History();
  private client: Client = new Client();
  // private id: number = 2439;

  constructor(private clientService: ClientService) {
    this.client = Session.retrieve("connectedClient");
  }

  ngOnInit(): void {
    // this.getClients(this.id);
    // console.log("this.client : ", this.client);
  }

  // private getClients(id: number) {
  //   this.clientService.getClient(id).subscribe(data => {
  //     this.history = data.account.history;
  //     console.log(this.history);
  //   });
  //
  // }

}
