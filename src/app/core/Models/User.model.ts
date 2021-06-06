import {Identification} from './Identification.model';
import {Account} from './Account.model';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: Date;
  addresse: string;
  identification: Identification;
  account: Account;
}
