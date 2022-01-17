/// <reference types="react-scripts" />

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: CommentToPost[],
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

interface CommentToPost {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}
