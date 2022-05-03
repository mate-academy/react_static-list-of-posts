import { User } from './User';
import { Comment } from './Comment';
import { Post } from './Post';

export interface PreparedPost extends Post {
  user: User | null,
  comments: Comment[] | null,
}
