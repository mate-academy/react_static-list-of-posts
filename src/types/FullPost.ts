import { User } from './User';
import { Post } from './Post';
import { Comment } from './Comment';

export interface FullPost extends Post {
  user: User | null;
  comments: Comment[];
}
