export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface Geo {
  lat: string,
  lng: string,
}

interface Adress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Adress,
  phone: string,
  website: string,
  company: Company,
}

export interface PreparedPost extends Post {
  user: User | undefined,
  comments: Comment[],
}
