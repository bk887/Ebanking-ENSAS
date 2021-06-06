import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../core/service/client.service';
import {Transaction} from '../../../core/model/Transaction.model';
import {Client} from '../../../core/model/Client.model';
import {History} from '../../../core/model/History.model';

@Component({
  selector: 'app-consulter-historique',
  templateUrl: './consulter-historique.component.html',
  styleUrls: ['./consulter-historique.component.scss']
})
export class ConsulterHistoriqueComponent implements OnInit {

  private  transactions: Transaction[] = new Array<Transaction>();
  private history: History = new History();
  private client: Client = new Client;
  private id: number = 1799;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients(this.id);
  }

  private getClients(id: number) {
    this.clientService.getClient(id).subscribe(data => {
      this.history = data.account.history;
      console.log(this.history);
    });

  }

}
