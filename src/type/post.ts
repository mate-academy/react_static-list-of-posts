import { User } from './user';
import { Comment } from './comment';

export interface Post {
  userId: number;
  id: number;
  title:string;
  body:string;
  user: User | null;
  comments: Comment[] | null;
}

export type PostArr = {
  posts:Post[];
};

export type PostInfoType = {
  post: Post;
};
