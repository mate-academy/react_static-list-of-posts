interface Geo {
  lat: string;
  lng: string;
}

interface Adress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;
}
