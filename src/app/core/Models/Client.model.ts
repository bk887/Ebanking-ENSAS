import {DateAdapterOptions} from 'chart.js';
import {User} from './User.model';
import {Agent} from './Agent.model';

export class Client extends User{
  agent: Agent;

}
