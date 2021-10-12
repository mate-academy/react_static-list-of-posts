export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: IUser | null;
  commentList: IComment[];
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddressInfo;
  phone: string;
  website: string;
  company: IUserCompanyInfo;
}

interface IUserCompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUserAddressInfo {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeolocationUserInfo;
}

interface IGeolocationUserInfo {
  lat: string;
  lng: string;
}
