export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user?: User,
  comments?: Comment[],
}

export interface Comment {
  postId: number,
  id: number,
  email: string,
  name: string,
  body: string,
}

export interface User {
  id: number,
  name: string,
  email: string,
}
