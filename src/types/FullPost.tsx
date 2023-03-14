import { User } from './User';
import { Post } from './Post';
import { Comment } from './Comment';

export interface FullPost {
  author: User,
  post: Post,
  comment: Comment[],
}
