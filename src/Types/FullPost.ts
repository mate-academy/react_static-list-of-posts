import { User } from './User';
import { Comment } from './Comment';
import { Post } from './Post';

export interface FullPost extends Post {
  user?: User;
  comments: Comment[];
}
