import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Transaction } from 'src/app/core/model/Transaction.model';
import {ClientService} from "../../../core/service/client/client.service";
import {Client} from "../../../core/model/Client.model";
import {Session} from "../../../utils/session-utils";
import {AgentService} from "../../../core/service/agent/agent.service";
import {NzModalService} from "ng-zorro-antd/modal";


@Component({
  selector: 'app-effectuer-virement',
  templateUrl: './effectuer-virement.component.html',
  styleUrls: ['./effectuer-virement.component.scss']
})
export class EffectuerVirementComponent implements OnInit {

  trans:Transaction = new Transaction();
  myForm!:FormGroup;
  client : Client = new Client()


  constructor(private fb:FormBuilder,private clientServ:ClientService,private modal: NzModalService) {
    this.client = Session.retrieve("connectedClient")

   }

  ngOnInit(): void {
    console.log(this.client)
    this.myForm=this.fb.group(
      {
        title:null,
        sender:null,
        receiver:null,
        amount:null,
        transactionDate:null
      }
    )
  }

  saveTransaction()
  {
    this.clientServ.addTransaction(this.trans).subscribe(data=>{
      this.modal.success({
        nzTitle: 'Bien enregistré',
        nzContent: 'transaction est bien enregistré dans la base de données'
      });
    }),
      error=>console.log(error)
      this.myForm.reset()
  }

  onSubmit()
  {
    this.trans.sender = this.client.id.toString()
    this.trans.receiver = this.myForm.controls.receiver.value;
    this.trans.amount = this.myForm.controls.amount.value;
    this.trans.transactionDate = this.myForm.controls.transactionDate.value;
    this.trans.title=this.myForm.controls.title.value;
    for(const i in this.myForm.controls)
    {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }

    this.saveTransaction();
  }

}
