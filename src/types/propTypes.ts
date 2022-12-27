export interface PostTypes {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface UserTypes {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface CommentTypes {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface PostInfoProps {
  post: PostTypes,
}

export interface UserInfoProps {
  user?: UserTypes
}

export interface CommentListType {
  comments: Array<CommentTypes>
}

export interface CommentInfoType {
  comment: CommentTypes
}
