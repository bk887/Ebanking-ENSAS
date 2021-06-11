import {Component, OnInit} from '@angular/core';
import {AgentService} from "../../../core/service/agent/agent.service";
import {Client} from "../../../core/model/Client.model";
import {Agent} from "../../../core/model/Agent.model";
import {Session} from "../../../utils/session-utils";
import {NzModalService} from "ng-zorro-antd/modal";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gerer-clients',
  templateUrl: './gerer-clients.component.html',
  styleUrls: ['./gerer-clients.component.scss']
})
export class GererClientsComponent implements OnInit {

  searchValue = '';
  expandSet = new Set<number>();
  visible = false;
  clients: Client[] = []
  agent: Agent = new Agent()
  getAgent: Agent = new Agent()
  listOfDisplayClient: Client[]
  data: any;
  id:number

  constructor(private agentService: AgentService,private modal: NzModalService,private router :Router) {
    this.agent = Session.retrieve("connectedAgent")


  }

  ngOnInit(): void {
    this.agentService.getAgentById(this.agent.id).subscribe(data => {
      this.getAgent = data

      this.clients = this.getAgent.clients
      this.listOfDisplayClient = [...this.getAgent.clients];
    }),
      error => console.log(error)

  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayClient = this.clients.filter((item: Client) => item?.identity.serialNumber.indexOf(this.searchValue) !== -1);
  }

  getClients() {
    this.agentService.getAgent().subscribe(data => {

    }),
      error => console.log(error)
  }


  delete(id) {
    this.agentService.deleteClient(id).subscribe(data => {

      this.modal.success({
        nzTitle: 'Bien supprimé',
        nzContent: 'le client est bien supprimé '
      });
    }),
      error => console.log(error)
    this.listOfDisplayClient = this.listOfDisplayClient.filter((value,key)=>{
      return value.id != id;
    });
  }


  edit(data: any) {
    this.id = data.id
    this.router.navigate(['dashboard/agent/updateAgent',this.id])
  }
}
