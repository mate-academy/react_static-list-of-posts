export interface Comment {
  postId: number,
  name: string,
  body: string,
  email: string,
  id: number,
}

export interface User {
  name: string;
  email: string;
  username: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
