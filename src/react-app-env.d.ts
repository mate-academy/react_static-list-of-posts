interface UserAddressGeo {
  lat: string,
  lng: string,
}

interface UserAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: UserAddressGeo,
}

interface UserCompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: UserAddress,
  phone: string,
  website: string,
  company: UserCompany,
}

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments: Comments[];
}
