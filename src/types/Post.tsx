export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Geo {
  lat: string,
  lng: string,
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
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | undefined;
  comments: Comment[] | [];
}
