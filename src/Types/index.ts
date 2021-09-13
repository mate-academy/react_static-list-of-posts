export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[],
}

export interface User {
  id: number,
  name: string,
  email: string,
}

export interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}
