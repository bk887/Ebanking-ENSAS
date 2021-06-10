import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../model/Client.model";
import {Agent} from "../../model/Agent.model";
import {Identification} from "../../model/Identification.model";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private baseUrl = "https://ebanking-ensas.herokuapp.com/agent/";
  private baseUrlClient = "https://ebanking-ensas.herokuapp.com/client/";
  constructor(private httpClient: HttpClient) { }

  getAgent(): Observable<Agent> {
    return this.httpClient.get<Agent>(`${this.baseUrl}`);
  }
  getAgentById(id:number): Observable<Agent> {
    return this.httpClient.get<Agent>(`${this.baseUrl + id}`);
  }
  saveClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.baseUrlClient,client);
  }
}
