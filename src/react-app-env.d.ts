/// <reference types="react-scripts" />

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface PreparedPost extends Post {
  comments: Comment[],
  user: User | null,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: AddressInterface,
  phone: string,
  website: string,
  company: Company,
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface AddressInterface {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

interface Geo {
  lat: string,
  lng: string,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}
