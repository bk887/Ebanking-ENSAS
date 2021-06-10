import {Component, OnInit} from '@angular/core';
import {Agent} from "../../core/model/Agent.model";
import {Session} from "../../utils/session-utils";
import {Client} from "../../core/model/Client.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;

  constructor() {
  }

  public get agent():Agent{
    return Session.retrieve("connectedAgent")
  }
  public get client():Client{
    return Session.retrieve("connectedClient")
  }
  ngOnInit() {
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    // tslint:disable-next-line:only-arrow-functions
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      // tslint:disable-next-line:only-arrow-functions
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      // tslint:disable-next-line:only-arrow-functions
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
