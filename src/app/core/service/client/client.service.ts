import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from "../../model/Client.model";
import {Agent} from "../../model/Agent.model";
import {Transaction} from "../../model/Transaction.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "https://ebanking-ensas.herokuapp.com/client/";
  private baseUrlTrans = "https://ebanking-ensas.herokuapp.com/client/transaction/";
  constructor(private httpClient: HttpClient) {

  }

  getClient(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl}`);
  }

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl +id}`);
  }
  getAgent(idClient: number): Observable<Agent> {
    return this.httpClient.get<Agent>(`${this.baseUrl + "agent/" + idClient}`);
  }
  addTransaction(trans:Transaction):Observable<Transaction>
  {
    return this.httpClient.post<Transaction>(this.baseUrlTrans,trans );
  }

}
