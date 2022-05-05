export interface Post {
  body: string,
  id?: number,
  comments: Comment[],
  title: string,
  user: User,
  userId?: number,
}

export interface Comment {
  name: string,
  email: string,
  body: string,
  id: number,
}

interface User {
  name: string,
  email: string,
}
