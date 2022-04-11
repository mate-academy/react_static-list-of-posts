import { Post } from './Post';
import { Users } from './Users';
import { Comment } from './Comment';

export interface FullPost extends Post {
  user?: Users;
  comments: Comment[];
}
