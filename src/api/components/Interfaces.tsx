export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Post {
  body: string;
  comments: Comment[];
  id: number;
  title: string;
  user: User | null;
  userId: number;
}
