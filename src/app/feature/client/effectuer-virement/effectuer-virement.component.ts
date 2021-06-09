import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/Models/Transaction.model';

@Component({
  selector: 'app-effectuer-virement',
  templateUrl: './effectuer-virement.component.html',
  styleUrls: ['./effectuer-virement.component.scss']
})
export class EffectuerVirementComponent implements OnInit {

  @Input() trans:Transaction;

  constructor() {
    this.trans = new Transaction();
   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.trans.beneficiaire);
  }

}
