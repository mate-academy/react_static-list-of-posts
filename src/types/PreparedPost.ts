import { Post } from './Post';
import { Comment } from './Comment';
import { User } from './User';

export interface PreparedPost extends Post {
  user: User | null;
  commentArray: Comment[];
}
