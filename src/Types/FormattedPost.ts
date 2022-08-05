import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface FormattedPost extends Post {
  comments: Comment[];
  user: User | undefined;
}
