export interface ListProp<T> {
  list: Array<T>;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ExtendedPost extends Post {
  user?: User | undefined;
  comments: Comment[];
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
