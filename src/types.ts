export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PreparedPostType {
  post: PostType,
  user: UserType | null,
  comments: CommentType[],
}
