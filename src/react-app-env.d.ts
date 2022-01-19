/// <reference types="react-scripts" />

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  commentaries: Commentary[];
  user: User | null;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Commentary {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
