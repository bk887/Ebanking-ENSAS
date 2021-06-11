import {Component, OnInit, ViewChild} from '@angular/core';
import {Transaction} from "../../../core/model/Transaction.model";
import {Agent} from "../../../core/model/Agent.model";
import {Session} from "../../../utils/session-utils";
import {NgForm} from "@angular/forms";
import {AgentService} from "../../../core/service/agent/agent.service";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.scss']
})
export class VirementComponent implements OnInit {

  transaction : Transaction = new Transaction()
  agent : Agent = new Agent()
  agentFromDb :Agent = new Agent()
  id : number
  transactionFromDb : Transaction[] = []
  constructor(private agentService: AgentService,private modal: NzModalService) {
    this.agent = Session.retrieve("connectedAgent")
    this.id= this.agent.id
  }

  ngOnInit(): void {
    this.tansactionsDb();


  }
  tansactionsDb(){
    this.agentService.getAgentById(this.id).subscribe(data =>{

      this.transactionFromDb = data.account.history.transactions

    }),
      error=>console.log(error)
  }

  @ViewChild('myForm', {static: false}) myForm: NgForm;
  onSubmit() {
    this.transaction.sender = this.agent.id.toString()

    this.agentService.saveTransaction(this.transaction).subscribe(data =>{
      this.modal.success({
        nzTitle: 'Bien enregistré',
        nzContent: 'transaction est bien enregistré dans la base de données'
      });
    }),
      error=>console.log(error)
    this.myForm.resetForm();
  }
}
