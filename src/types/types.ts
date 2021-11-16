export interface Post {
  id?: number,
  userId: number,
  title: string,
  body: string,
  user?: User,
  comment?: Comment[],
}

export interface User {
  name: string,
  email: string,
}

export interface Comment {
  id?: number,
  postId?: number,
  name: string,
  body: string,
  email: string,
}
