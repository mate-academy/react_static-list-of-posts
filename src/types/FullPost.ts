import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface FullPost extends Post {
  user?: User,
  comments: Comment[],
}
