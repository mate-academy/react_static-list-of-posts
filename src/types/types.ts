export interface User {
  id: number;
  name: string;
  username:string;
  email: string;
}

export interface Coment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null,
  comments: Coment[];
}
