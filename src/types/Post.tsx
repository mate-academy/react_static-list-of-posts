export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments: Comment[];
}

interface User {
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
