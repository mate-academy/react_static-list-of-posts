export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export type PreparedPost = {
  userId: number,
  id: number,
  title: string,
  body: string,
  autor: User | null,
  postComments: Comment[],
};
