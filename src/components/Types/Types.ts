export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: { name: string, catchPhrase: string, bs: string }
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user?: User | null
  comments?: Coment | null
}

export interface Coment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: { lat: string, lng: string },
};
