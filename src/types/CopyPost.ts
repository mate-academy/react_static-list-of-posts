import { Post } from './Posts';
import { User } from './Users';
import { Comment } from './Comments';

export interface CopyPost extends Post {
  user: User;
  comments: Comment[];
}
