import { Component, OnInit } from '@angular/core';
import {Client} from '../../../core/model/Client.model';
import {ClientService} from '../../../core/service/client.service';
import {Transaction} from '../../../core/model/Transaction.model';
import {History} from '../../../core/model/History.model';

@Component({
  selector: 'app-consulter-solde',
  templateUrl: './consulter-solde.component.html',
  styleUrls: ['./consulter-solde.component.scss']
})
export class ConsulterSoldeComponent implements OnInit {

  private client: Client = new Client();
  private id: number = 2439;
  private history = new History();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients(this.id);
    this.getHistory();
    // console.log(this.client);
  }

  private getClients(id: number) {
    this.clientService.getClient(id).subscribe(data => {
      this.client = data;
      // console.log(this.client.account.history);

    });

  }

  private getHistory() {
    // console.log(this.client.account.history.transactions.length);
    let i = (this.client.account?.history?.transactions?.length <= 3) ? this.client?.account?.history?.transactions.length : 3;
    console.log(this.client.account?.history?.transactions);
    let k = 0;
    while ( i > 0) {
      this.history?.transactions?.push( this.client.account?.history?.transactions[ k ] );
      k++;
      i--;
    }
    // console.log(this.history)
  }

  trafficChartData = [
    {
      data: [30, 30, 40],
    }
  ];

  trafficChartLabels = ["Search Engines", "Direct Click", "Bookmarks Click"];

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  };

  trafficChartColors = [
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(132, 217, 210, 1)'
      ],
      borderColor: [
        'rgba(177, 148, 250, .2)',
        'rgba(254, 112, 150, .2)',
        'rgba(132, 217, 210, .2)'
      ]
    }
  ];

}
