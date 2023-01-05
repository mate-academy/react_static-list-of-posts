import { User } from './User';
import { Post } from './Post';
import { Comment } from './Comment';

export interface PreparedPost extends Post {
  user?: User,
  comments: Comment[],
}
