interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface User {
  name: string;
  username: string;
  email: string;
}
export interface NewPosts extends Post {
  user: User[] | null;
  comment: Comment[] | null;
}
