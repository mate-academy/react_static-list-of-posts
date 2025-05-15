export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  user?: User;
  comments?: Comment[];
}
