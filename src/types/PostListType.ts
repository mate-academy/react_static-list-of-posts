import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export interface PostListType extends Post {
  user: User | null;
  comments: Comment[];
}
