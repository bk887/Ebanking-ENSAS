import {Client} from '../core/Models/Client.model';
// @ts-ignore
import {Subject} from 'rxjs/Subject';

export class ClientService {
  clients: Client [] = [];
  clientSubject = new Subject<Client[]>();
}



