import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/model/Transaction.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClientService} from "../../../core/service/client/client.service";
import {Client} from "../../../core/model/Client.model";
import {Session} from "../../../utils/session-utils";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-effectuer-recharge-tele',
  templateUrl: './effectuer-recharge-tele.component.html',
  styleUrls: ['./effectuer-recharge-tele.component.scss']
})
export class EffectuerRechargeTeleComponent implements OnInit {

  transa:Transaction;
  myForm!:FormGroup;
  client : Client = new Client()


  constructor(private fb:FormBuilder,private clientServ:ClientService,private modal: NzModalService) {
    this.client = Session.retrieve("connectedClient")
  }

  ngOnInit(): void {
    this.myForm=this.fb.group(
      {
        account:null,
        number:null,
        amount:null,
        transactionDate:null
      }
    )
    this.transa=new Transaction();
  }

  saveTransaction()
  {
    this.clientServ.addTransaction(this.transa).subscribe(data=>{

      this.modal.success({
        nzTitle: 'Bien enregistré',
        nzContent: 'transaction est bien enregistré dans la base de données'
      });
    }),
      error=> console.log(error)
    this.myForm.reset()
  }

  onSubmit()
  {
    this.transa.sender = this.client.id.toString();
    this.transa.receiver = '2661';
    this.transa.amount = this.myForm.controls.amount.value;
    this.transa.transactionDate = this.myForm.controls.transactionDate.value;
    this.transa.title="Recharge de la ligne";
    for(const i in this.myForm.controls)
    {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
    console.log(this.transa);
    this.saveTransaction();
  }
}
