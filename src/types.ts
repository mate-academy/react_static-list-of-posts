export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  user?: User;
  comments: Comment[];
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
