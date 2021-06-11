import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/model/Transaction.model';
import { ClientService } from 'src/app/core/service/client.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-effectuer-recharge-tele',
  templateUrl: './effectuer-recharge-tele.component.html',
  styleUrls: ['./effectuer-recharge-tele.component.scss']
})
export class EffectuerRechargeTeleComponent implements OnInit {

  transa:Transaction;
  myForm!:FormGroup;


  constructor(private fb:FormBuilder,private clientServ:ClientService) {

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
    //this.myForm.valueChanges.subscribe(console.log)
  }

  saveTransaction()
  {
    this.clientServ.addTransaction(this.transa).subscribe(data=>{
        console.log(data);
        this.myForm.reset()
      },
      error=> console.log(error)
    );
  }

  onSubmit()
  {
    this.transa.sender = this.myForm.controls.account.value;
    this.transa.receiver = this.myForm.controls.number.value;
    this.transa.amount = this.myForm.controls.amount.value;
    this.transa.transactionDate = this.myForm.controls.transactionDate.value;
    this.transa.title="Recharge de la ligne "+this.transa.receiver +" d'un solde de "+this.transa.amount;
    console.log(this.myForm.controls.sender.value);
    for(const i in this.myForm.controls)
    {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
    console.log(this.transa);
    this.saveTransaction();
  }
}
