/// <reference types="react-scripts" />

export interface User {
  name: string;
  email: string;
}

export interface Comment {
  name: string;
  body: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
