export interface CommentTypes {
  postId?: number,
  id?: number,
  name?: string,
  email?: string,
  body?: string
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

export interface CombinedPosts extends PostTypes{
  comments: Array<CommentTypes>,
  user?: UserTypes,
}

export interface PostListProps {
  posts: Array<CombinedPosts>
}

export interface PostInfoProps {
  post: CombinedPosts
}

export interface UserInfoProps {
  user?: UserTypes
}

export interface CommentListProps {
  comments: Array<CommentTypes>
}

export interface CommentInfoProps {
  comment: CommentTypes
}
