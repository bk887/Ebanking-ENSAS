import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {Agent} from "../../core/model/Agent.model";
import {Session} from "../../utils/session-utils";
import {Client} from "../../core/model/Client.model";
import {LoginService} from "../../core/service/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  constructor(config: NgbDropdownConfig,private router :Router) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
  }

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }

  public get agent():Agent{
    return Session.retrieve("connectedAgent")
  }
  public get client():Client{
    return Session.retrieve("connectedClient")
  }
  signOut() {
    console.log("test")
    if(this.agent){
      Session.remove("connectedAgent")
      this.router.navigate(['/login/login-agent'])
    }else if (this.client){
      Session.remove("connectedClient")
      this.router.navigate(['/login/login-client'])
    }
  }
}
