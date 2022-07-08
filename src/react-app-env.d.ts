/// <reference types="react-scripts" />
export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}

export interface User {
  name: string,
  email: string,
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}
