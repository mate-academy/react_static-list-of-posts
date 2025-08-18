import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export type PreparedPost = Post & {
  user: User | null;
  comments: Comment[];
};
