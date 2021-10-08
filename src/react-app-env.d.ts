/// <reference types="react-scripts" />

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}

interface User {
  id: number;
  name: string;
  email: string;
  address: {};
  phone: string;
  website: string;
  company: {};
}
