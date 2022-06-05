/// <reference types="react-scripts" />

export interface PostFromServer {
  userId: number,
  id: number,
  title: string;
  body: string;
}

export interface CommentFromServer {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UserFromServer {
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
    },
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  },
}

export interface GeneralPosts extends PostFromServer {
  user: UserFromServer | null;
  comments: CommentsFromServer[];
}
