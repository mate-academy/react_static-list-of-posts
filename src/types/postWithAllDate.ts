import { Comment } from './comment';
import { Post } from './post';
import { User } from './user';

export interface PostWithAllDate extends Post {
  user: User,
  comments: Comment[];
}
