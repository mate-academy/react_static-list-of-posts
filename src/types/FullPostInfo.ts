import { User } from './user';
import { Post } from './post';
import { Comment } from './comment';

export interface FullPostInfo extends Post {
  user: User;
  comments: Comment[];
}
