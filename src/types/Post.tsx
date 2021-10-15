export interface Post {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comments[];
}

export interface Comments {
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
}
