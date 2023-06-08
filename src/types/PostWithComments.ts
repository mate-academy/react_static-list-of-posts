import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export interface PostWithComments extends Post {
  user: User | null;
  comments: Comment[] | null;
}
