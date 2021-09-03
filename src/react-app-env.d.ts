/// <reference types="react-scripts" />

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Post {
  user: User | null;
  commentsFromUsers: Comment[];
  userId: number;
  id: number;
  title: string;
  body: string;
}
