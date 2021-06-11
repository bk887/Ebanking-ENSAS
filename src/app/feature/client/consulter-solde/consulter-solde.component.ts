import { Component, OnInit } from '@angular/core';
import {Client} from '../../../core/model/Client.model';
import {ClientService} from '../../../core/service/client/client.service';
import {Transaction} from '../../../core/model/Transaction.model';
import {History} from '../../../core/model/History.model';
import {Session} from '../../../utils/session-utils';
import {element} from 'protractor';

@Component({
  selector: 'app-consulter-solde',
  templateUrl: './consulter-solde.component.html',
  styleUrls: ['./consulter-solde.component.scss']
})
export class ConsulterSoldeComponent implements OnInit {

  private client: Client = new Client();
  private positiveTransaction: number = 0.0;
  private negativeTransaction: number = 0.0;

  constructor(private clientService: ClientService) {
    this.client = Session.retrieve("connectedClient");
  }

  ngOnInit(): void {
    this.transactionDataChart();
  }

  private transactionDataChart() {
    this.client.account.history.transactions.forEach(element => {
      if (element.amount > 0) {
        this.positiveTransaction += element.amount;
      } else {
        this.negativeTransaction += -(element.amount);
      }
    });

    this.positiveTransaction = ( this.positiveTransaction / (this.positiveTransaction + this.negativeTransaction) ) * 100;
    this.negativeTransaction = ( this.negativeTransaction / (this.positiveTransaction + this.negativeTransaction) ) * 100;

    this.trafficChartData = [
      {
        data: [this.negativeTransaction, this.positiveTransaction],
      }
    ];

  }

  trafficChartData = [
    {
      data: [0, 0],
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
        'rgba(254, 112, 150, 1)',
        'rgba(132, 217, 210, 1)'
      ],
      borderColor: [
        'rgba(254, 112, 150, .2)',
        'rgba(132, 217, 210, .2)'
      ]
    }
  ];

}
