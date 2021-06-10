import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../../core/model/Client.model";
import {Identification} from "../../../core/model/Identification.model";
import {Identity} from "../../../core/model/Identity.model";
import {Account} from "../../../core/model/Account.model";
import {Agent} from "../../../core/model/Agent.model";
import {Session} from "../../../utils/session-utils";
import {LoginService} from "../../../core/service/login/login.service";
import {AgentService} from "../../../core/service/agent/agent.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-creer-clients',
  templateUrl: './creer-clients.component.html',
  styleUrls: ['./creer-clients.component.scss']
})
export class CreerClientsComponent implements OnInit {

  client : Client = new Client()
  agent : Agent = new Agent()

  constructor(private agentService: AgentService,private modal: NzModalService) {
    this.client.identification = new Identification()
    this.client.identity = new Identity()
    this.client.account = new Account()
    this.agent = Session.retrieve("connectedAgent")
  }

  ngOnInit(): void {

  }

  identificationAgent(){
    this.agentService.saveClient(this.client).subscribe(data =>{
        this.modal.success({
          nzTitle: 'Bien enregistré',
          nzContent: 'le client est bien enregistré dans la base de données'
        });
    }),
      error=>console.log(error)
  }
  @ViewChild('myForm', {static: false}) myForm: NgForm;
  onSubmit() {

    this.client.identity.idType ="CIN"
    this.client.id = 0;
    this.client.account.id = 0
    this.client.consultantId = this.agent.id
    this.identificationAgent()
    this.myForm.resetForm();
  }
}
