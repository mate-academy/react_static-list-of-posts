export interface User {
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User;
  postComments: Comment[];
}
