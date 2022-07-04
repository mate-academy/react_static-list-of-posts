import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface PreparedPost extends Post {
  user: User | undefined,
  comments: Comment[] | [],
}
