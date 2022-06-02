/// <reference types="react-scripts" />

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface PreparedPosts extends Post {
  user: User | null,
  comments: Comment[] | null,
}

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
  phone: string,
  website: string,
  address: Addres,
  phone: string,
  website: string,
  company: Company
}

export interface Addres {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface Geo {
  lat: string,
  lng: string,
}

export interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}
