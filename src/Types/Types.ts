export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type PostListType = {
  posts: Post[];
  users: User[];
  comments: Comment[];
};

export type PostInfoType = Omit<Post, 'id'> & {
  users: User[];
};

export type CommentListType = Pick<Post, 'id'> & {
  comments: Comment[];
};

export type CommentInfoType = Pick<Comment, 'name' | 'email' | 'body'>;
