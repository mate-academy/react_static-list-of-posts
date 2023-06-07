import { Post } from './Post';
import { Comment } from './Comment';
import { User } from './User';

export interface FullPost extends Post {
  user?: User,
  comments: Comment[],
}
