import {History} from './History.model';

export class Account {
  id: number;
  creationDate: Date;
  balance: number;
  history: History;


  constructor() {
    this.history = new History();
  }
}
