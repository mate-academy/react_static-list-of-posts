export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  commentList: Comment[];
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddressInfo;
  phone: string;
  website: string;
  company: UserCompanyInfo;
}

interface UserCompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserAddressInfo {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeolocationUserInfo;
}

interface GeolocationUserInfo {
  lat: string;
  lng: string;
}
