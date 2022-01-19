export interface Comment {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  userId: number;
  id: number;
  user: User | null;
  comments: Comment[];
  title: string;
  body: string;
}
