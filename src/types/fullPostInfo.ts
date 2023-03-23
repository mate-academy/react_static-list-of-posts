import { Comment } from './comment';
import { Post } from './post';
import { User } from './user';

export interface FullPostInfo extends Post {
  user: User | null,
  comments: Comment[],
}
