import {Component, Inject, OnInit} from '@angular/core';
import {Client} from '../../../core/model/Client.model';
import {ClientService} from '../../../core/service/client/client.service';
import {Transaction} from '../../../core/model/Transaction.model';
import {History} from '../../../core/model/History.model';
import {Session} from '../../../utils/session-utils';
import {element} from 'protractor';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-consulter-solde',
  templateUrl: './consulter-solde.component.html',
  styleUrls: ['./consulter-solde.component.scss']
})
export class ConsulterSoldeComponent implements OnInit {

  private client: Client = new Client();
  private positiveTransaction: number = 0.0;
  private negativeTransaction: number = 0.0;
  private listTransactions: Transaction[];

  constructor(private clientService: ClientService, @Inject(DOCUMENT) private document: Document) {
    this.client = Session.retrieve("connectedClient");
    if( this.client == null ) {
      // alert("pas connecter");
      window.location.href = 'http://localhost:4200/login/login-client';
    }
  }

  ngOnInit(): void {
    this.getTransactions()
    this.transactionDataChart();
    console.log(this.listTransactions);
  }

  private getTransactions() {
      this.clientService.getTransactions(this.client.id).subscribe(data => {
        this.listTransactions = data;
      });
  }

  private transactionDataChart() {
    this.client.account.history.transactions.forEach(element => {
      if (element.amount > 0) {
        this.positiveTransaction += element.amount;
      } else {
        this.negativeTransaction += -(element.amount);
      }
    });

    console.log("positif: " + this.positiveTransaction);
    console.log("negatif: " + this.negativeTransaction);

    let total = this.positiveTransaction + this.negativeTransaction;

    this.positiveTransaction = ( this.positiveTransaction / total ) * 100;
    this.negativeTransaction = ( this.negativeTransaction / total ) * 100;

    console.log("positif: " + this.positiveTransaction);
    console.log("negatif: " + this.negativeTransaction);

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
