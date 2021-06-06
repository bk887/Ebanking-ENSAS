import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../../core/Models/Transaction.model';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-consulter-historique',
  templateUrl: './consulter-historique.component.html',
  styleUrls: ['./consulter-historique.component.scss']
})
export class ConsulterHistoriqueComponent implements OnInit {

  private montant: number = 1500;
  private montant2: number = -1500;

  private transaction: Transaction = new Transaction();
  // @ts-ignore
  private  transactions: Transaction[] = new Array<Transaction>();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.transaction.id = "WD-12345";
    this.transaction.title = "Fund is not recieved";
    this.transaction.amount = 1500;
    this.transaction.sender = "Lamiae";
    this.transaction.receiver = "sakhr";
    // @ts-ignore
    this.transaction.transactionDate = new Date();
    // @ts-ignore
    this.transactions.push(this.transaction);
    // @ts-ignore
    this.transactions.push(this.transaction);
    // @ts-ignore
    this.transactions.push(this.transaction);
    // @ts-ignore
    this.transactions.push(this.transaction);
    // @ts-ignore
    this.transactions.push(this.transaction);
    // @ts-ignore
    this.transactions.push(this.transaction);

    this.getClient();

  }

  private getClient(){
    this.clientService.getClient().subscribe( data => {
      console.log(data);
    } )
  }

}
