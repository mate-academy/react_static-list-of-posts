import { Post } from './Post';
import { Comment } from './Comment';
import { User } from './User';

export type PreparedPost = Post & {
  user: User;
  comments: Comment[];
};
