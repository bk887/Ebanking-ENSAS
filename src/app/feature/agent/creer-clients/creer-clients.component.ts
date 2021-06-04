import {Component, Input, OnInit} from '@angular/core';
import { Client} from '../../../core/Models/Client.model';

@Component({
  selector: 'app-creer-clients',
  templateUrl: './creer-clients.component.html',
  styleUrls: ['./creer-clients.component.scss']
})
export class CreerClientsComponent implements OnInit {

  @Input() client: Client = new Client();

  ajouterClient(): void {
    console.log(this.client);
  }



  constructor() { }

  ngOnInit(){ }

}
