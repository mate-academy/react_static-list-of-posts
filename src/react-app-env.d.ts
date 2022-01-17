/// <reference types="react-scripts" />
interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}

interface Geo {
  lat: string,
  lng: string,
}

interface InfoOfCompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: InfoOfCompany,
}
