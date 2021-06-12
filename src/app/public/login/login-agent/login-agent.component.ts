import { Component, OnInit } from '@angular/core';
import {Identification} from "../../../core/model/Identification.model";
import {Session} from "../../../utils/session-utils";
import {LoginService} from "../../../core/service/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-agent',
  templateUrl: './login-agent.component.html',
  styleUrls: ['./login-agent.component.scss']
})
export class LoginAgentComponent implements OnInit {

  identification : Identification = new Identification()
  showError: boolean = false;
  constructor(private loginService :LoginService,private router :Router) { }

  ngOnInit(): void {
  }

  identificationAgent(){
    this.loginService.authAgent(this.identification).subscribe(data =>{
      console.log(data)
      if(data){
        Session.store(data,"connectedAgent")
        this.router.navigate(['/dashboard/agent/gerer-clients'])
      }else {
        this.showError = true;
      }
    }),
      error=>console.log(error)
  }
  onSubmit() {
    console.log("agent identification :" , this.identification)
    this.identificationAgent()
  }
}
