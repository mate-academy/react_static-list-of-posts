export interface ExtendedPost extends Post {
  user: User | null,
  comments: Comment[],
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: AddressUser,
  phone: string,
  website: string,
  company: CompanyUser
}

export interface AddressUser {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoUser,
}

export interface GeoUser {
  lat: string,
  lng: string,
}

export interface CompanyUser {
  name: string,
  catchPhrase: string,
  bs: string,
}
