export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostWithUser extends Post {
  comments: Comment[],
  user?: User
}
