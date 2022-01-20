/// <reference types="react-scripts" />

interface PreparedPost extends Post {
  user: User | null;
  comments: PostComment[];
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
