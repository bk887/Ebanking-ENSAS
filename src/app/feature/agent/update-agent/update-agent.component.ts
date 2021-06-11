import { Component, OnInit } from '@angular/core';
import {Client} from "../../../core/model/Client.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AgentService} from "../../../core/service/agent/agent.service";
import {Identification} from "../../../core/model/Identification.model";
import {Identity} from "../../../core/model/Identity.model";
import {Account} from "../../../core/model/Account.model";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.scss']
})
export class UpdateAgentComponent implements OnInit {

  client :Client =new Client()
  id:number
  constructor(private router:ActivatedRoute,private router1 :Router,private agentService :AgentService,private modal: NzModalService) {
    this.client.identification = new Identification()
    this.client.identity = new Identity()
    this.client.account = new Account()
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.agentService.getClient(this.id).subscribe(data => {
      this.client = data

    }),
      error => console.log(error)
  }

  onSubmit() {

    this.agentService.updateClient(this.client).subscribe(data =>{
      this.modal.success({
        nzTitle: 'Bien enregistré',
        nzContent: 'le client est bien enregistré dans la base de données'
      });
    }),
      error=>console.log(error)
    this.router1.navigate(['dashboard/agent/gerer-clients'])
  }
}
