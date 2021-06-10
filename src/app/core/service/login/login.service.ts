import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Agent} from "../../model/Agent.model";
import {HttpClient} from "@angular/common/http";
import {Client} from "../../model/Client.model";
import {Identification} from "../../model/Identification.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrlClient = "http://localhost:8080/client/auth";
  private baseUrlAgent = "http://localhost:8080/agent/auth";

  constructor(private httpClient: HttpClient) {

  }
  authClient(identification: Identification): Observable<Client> {
    return this.httpClient.post<Client>(this.baseUrlClient,identification);
  }
  authAgent(identification: Identification): Observable<Agent> {
    return this.httpClient.post<Agent>(this.baseUrlAgent,identification);
  }
}
