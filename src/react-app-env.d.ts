/// <reference types="react-scripts" />
interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  name: string;
  email: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comment: Comment[] | null;
}
