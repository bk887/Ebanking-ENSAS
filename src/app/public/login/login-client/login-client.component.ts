import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Identification} from "../../../core/model/Identification.model";
@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {

  identification : Identification = new Identification()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("agent identification :" , this.identification)
  }

}
