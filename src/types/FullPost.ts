import { Comment } from './Comment';
import { User } from './User';
import { Post } from './Post';

export interface FullPost extends Post {
  user: User | null;
  comments: Comment[];
}
