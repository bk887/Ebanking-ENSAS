import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Identification} from "../../../core/model/Identification.model";
import {LoginService} from "../../../core/service/login/login.service";
import {Session} from "../../../utils/session-utils";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {

  identification : Identification = new Identification()
  constructor(private loginService :LoginService,private router :Router) { }

  identificationClient(){
    this.loginService.authClient(this.identification).subscribe(data =>{
      console.log(data)
      if(data){
        Session.store(data,"connectedClient")
        this.router.navigate(['/dashboard/client/consulter-solde'])
      }else {
        alert("---------");
      }
    }),
      error=>console.log(error)
  }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log("agent identification :" , this.identification)
    this.identificationClient()
  }

}
