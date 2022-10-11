export interface CommentTypes {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface UserTypes {
  id?: number,
  name?: string,
  username?: string,
  email?: string
}

export interface PostTypes {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface Data extends PostTypes{
  comments: Array<CommentTypes>,
  user: UserTypes,
}
