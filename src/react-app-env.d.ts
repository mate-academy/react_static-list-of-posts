/// <reference types="react-scripts" />

interface User {
  id: number,
  name: string;
  email: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  user?: User;
  comments: Comment[];
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
