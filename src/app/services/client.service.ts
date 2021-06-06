import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../core/Models/Client.model';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private baseUrl = "http://localhost:8080/client/";

  constructor(private httpClient: HttpClient) {

  }

  getClient(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseUrl}`);
  }

}



