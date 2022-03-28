import { UserGeo } from './UserGeo';

export interface UserAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeo;
}
