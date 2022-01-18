/// <reference types="react-scripts" />

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address,
  phone: string;
  website: string;
  company: Company,
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: PostComment[];
}

interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
