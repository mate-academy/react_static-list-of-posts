import { User } from './user';
import { Post } from './post';
import { Comment } from './comment';

export interface PreparedPost extends Post {
  user: User,
  comment: Comment,
}
