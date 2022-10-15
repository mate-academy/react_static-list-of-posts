import { Post } from './Post';
import { Comment } from './Comment';
import { User } from './User';

export interface FullInfo extends Post{
  user: User | null;
  comments: Comment[] | null;
}
