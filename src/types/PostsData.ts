import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export interface PostsDatagjg {
  user: User | null;
  post: Post;
  comments: Comment[];
}

export interface PostsData {
  userId: string | number;
  id: number | string,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[];
}
