/// <reference types="react-scripts" />

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: PostComment[];
}

interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}
