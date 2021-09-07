/// <reference types="react-scripts" />

interface User {
  name: string;
  email: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  person: User | null;
  comments: Comment[] | null;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
