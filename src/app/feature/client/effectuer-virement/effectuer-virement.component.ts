import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Transaction } from 'src/app/core/model/Transaction.model';
import {ClientService} from '../../../core/service/client.service';



@Component({
  selector: 'app-effectuer-virement',
  templateUrl: './effectuer-virement.component.html',
  styleUrls: ['./effectuer-virement.component.scss']
})
export class EffectuerVirementComponent implements OnInit {

  trans:Transaction;
  myForm!:FormGroup;


  constructor(private fb:FormBuilder,private clientServ:ClientService) {

   }

  ngOnInit(): void {
    this.myForm=this.fb.group(
      {
        sender:null,
        receiver:null,
        amount:null,
        transactionDate:null
      }
    )
    this.trans= new Transaction();
    //this.myForm.valueChanges.subscribe(console.log)
  }

  saveTransaction()
  {
    this.clientServ.addTransaction(this.trans).subscribe(data=>{
      console.log(data);
      this.myForm.reset()
    },
      error=> console.log(error)
    );
  }

  onSubmit()
  {
    this.trans.sender = this.myForm.controls.sender.value;
    this.trans.receiver = this.myForm.controls.receiver.value;
    this.trans.amount = this.myForm.controls.amount.value;
    this.trans.transactionDate = this.myForm.controls.transactionDate.value;
    this.trans.title="Virement à l'ordre de "+this.trans.receiver +" d'un montant de "+this.trans.amount;
    console.log(this.myForm.controls.sender.value);
    for(const i in this.myForm.controls)
    {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
    console.log(this.trans);
    this.saveTransaction();
  }

}
