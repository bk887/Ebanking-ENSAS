import {Identification} from './Identification.model';
import {Account} from './Account.model';
import {Identity} from './Identity.model';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: Date;
  address: string;
  identification: Identification;
  account: Account;
  identity: Identity;
}
