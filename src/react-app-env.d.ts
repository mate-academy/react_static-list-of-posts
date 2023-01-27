/// <reference types="react-scripts" />
export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface FullPost extends Post {
  user: User | undefined;
  comments: Comment[];
}
