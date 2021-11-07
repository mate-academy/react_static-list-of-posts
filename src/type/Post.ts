export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: Users | undefined,
  comments: Comments[]
}

export interface Comments {
  body: string,
  email: string,
  id: number,
  name: string,
  postId: number,
}

export interface Users {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

export interface Geo {
  lat: string,
  lng: string,
}
