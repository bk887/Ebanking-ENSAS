import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../core/service/client/client.service';
import {Client} from '../../../core/model/Client.model';
import {Agent} from '../../../core/model/Agent.model';
import {Session} from '../../../utils/session-utils';

@Component({
  selector: 'app-visualiser-compte',
  templateUrl: './visualiser-compte.component.html',
  styleUrls: ['./visualiser-compte.component.scss']
})
export class VisualiserCompteComponent implements OnInit {

  private client: Client = new Client();
  private agent: Agent = new Agent();

  constructor(private clientService: ClientService) {
    this.client = Session.retrieve("connectedClient")
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
