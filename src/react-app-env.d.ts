/// <reference types="react-scripts" />

interface User {
  name: string;
  email: string;
}

interface Comment {
  postId: number;
  name: string;
  body: string;
  email: string;
  id: number;
}

interface Post {
  userId: numer;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comment: Comment[];
}
