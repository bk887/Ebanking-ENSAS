import { Component, OnInit } from '@angular/core';
import {Identification} from "../../../core/model/Identification.model";

@Component({
  selector: 'app-login-agent',
  templateUrl: './login-agent.component.html',
  styleUrls: ['./login-agent.component.scss']
})
export class LoginAgentComponent implements OnInit {

  identification : Identification = new Identification()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("agent identification :" , this.identification)
  }
}
