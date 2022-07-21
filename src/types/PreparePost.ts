import { Post } from './post';
import { User } from './user';
import { Comment } from './comment';

export interface PreparePost extends Post {
  user: User | undefined;
  comments: Comment[];
}
