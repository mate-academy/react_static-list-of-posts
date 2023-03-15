import { User } from './user';
import { Post } from './post';
import { Comment } from './comment';

export interface FullPost extends Post {
  user: User | null;
  comments: Comment[];
}
