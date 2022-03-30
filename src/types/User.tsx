import { UserAdress } from './UserAdress';
import { UserCompany } from './UserCompany';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAdress;
  phone: string;
  website: string;
  company: UserCompany;
}
