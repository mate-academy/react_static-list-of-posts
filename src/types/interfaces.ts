export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
}

export interface Comment {
  postId: number,
  id: number;
  name: string,
  email: string,
  body: string,
}

export interface Post {
  id: number,
  user: User | null,
  title: string,
  body: string,
  comment: Comment[] | null,
}
