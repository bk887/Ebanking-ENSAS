import {Component, Inject, OnInit} from '@angular/core';
import {ClientService} from '../../../core/service/client/client.service';
import {Client} from '../../../core/model/Client.model';
import {Agent} from '../../../core/model/Agent.model';
import {Session} from '../../../utils/session-utils';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-visualiser-compte',
  templateUrl: './visualiser-compte.component.html',
  styleUrls: ['./visualiser-compte.component.scss']
})
export class VisualiserCompteComponent implements OnInit {

  private client: Client = new Client();
  private agent: Agent = new Agent();

  constructor(private clientService: ClientService, @Inject(DOCUMENT) private document: Document) {
    this.client = Session.retrieve("connectedClient");
    if( this.client == null ) {
      // alert("pas connecter");
      window.location.href = 'http://localhost:4200/login/login-client';
    }
  }

  ngOnInit(): void {
    this.getAgent(this.client.id);
  }

  private getAgent(idClient: number) {
   this.clientService.getAgent(idClient).subscribe(data => {
      console.log(data);
      this.agent = data;
      console.log("______________________________");
      console.log(this.agent);
    })
  }

}
