import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export type PreparedPost = Post & {
  comments: Comment[];
  user: User | null;
};
