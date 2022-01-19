/// <reference types="react-scripts" />

interface User {
  name: string;
  email: string;
}

interface CommentItem {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PreparedPost extends Post {
  user: User | null;
  comments: CommentItem[];
}
