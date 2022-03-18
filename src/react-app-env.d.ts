/// <reference types="react-scripts" />

interface PostComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Post {
  body: string;
  comments: PostComment[];
  id: number;
  title: string;
  user: User | null;
  userId: number;
}
