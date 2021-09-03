/// <reference types="react-scripts" />

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

type PrepearedPostCommentsUser = {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comment: Comment[];
};
