export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  comments: Comment[] | null,
  user: User | null,
}
