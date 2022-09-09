export interface PostsT {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: UsersT | null,
  comments: CommentsT[] | null
}

export interface UsersT {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface CommentsT{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}
