export interface Post {
  id: number,
  title: string,
  body: string,
  user?: User,
  comments: Comment[],
}

export interface Comment {
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface User {
  name: string,
  email: string,
}
