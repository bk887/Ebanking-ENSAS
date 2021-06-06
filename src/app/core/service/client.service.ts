import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:8080/client/";

  constructor(private httpClient: HttpClient) {

  }

  getClient(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl+id}`);
  }

}
