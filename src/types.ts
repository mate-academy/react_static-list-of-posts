// types User
export interface Geo {
  lat: string,
  lng: string,
}

export interface Adress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface Company {
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

// types Comment
export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

// types PreparedPost
export interface PreparedPost {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
