import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../core/service/client.service';
import {Client} from '../../../core/model/Client.model';
import {Agent} from '../../../core/model/Agent.model';

@Component({
  selector: 'app-visualiser-compte',
  templateUrl: './visualiser-compte.component.html',
  styleUrls: ['./visualiser-compte.component.scss']
})
export class VisualiserCompteComponent implements OnInit {

  private client: Client = new Client();
  private id: number = 2439;

  private agent: Agent = new Agent();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients(this.id);
    this.getAgent(this.id);
  }

  private getClients(id: number) {
    this.clientService.getClient(id).subscribe(data => {
      this.client = data;
      console.log(this.id);

    });

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
