export interface CommentTypes {
  postId: number,
  id: number,
  email: string,
  body: string
}

export interface PostTypes {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface UserTypes {
  id: number,
  name: string,
  userName: string,
  email: string
}

export type PostListTypes = {
  posts: {
    post: PostListTypes,
    comments: CommentTypes,
    user: UserTypes,
  }
};
