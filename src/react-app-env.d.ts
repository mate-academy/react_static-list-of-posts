/// <reference types="react-scripts" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import common from 'mocha/lib/interfaces/common';

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
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

export interface PreparedPosts extends Posts {
  user: Users | null;
  comments: Comments[];
}
