/// <reference types="react-scripts" />

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geolocation,
}

interface Geolocation {
  lat: string,
  lng: string,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface PreparedPost extends Post {
  user: User | undefined,
  comments: Comment[],
}
