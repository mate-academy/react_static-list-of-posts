export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null
  comments: Comment[] | null;
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  name: string;
  email: string;
}
