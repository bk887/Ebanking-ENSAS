import {User} from './User.model';
import {Client} from './Client.model';

export class Agent extends User{
  clients: Client[];
}
