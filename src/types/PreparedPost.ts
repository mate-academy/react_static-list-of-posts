import { User } from './User';
import { Comment } from './Comment';
import { Post } from './Post';

export type PreparedPost = Post & {
  comments: Comment[];
  user: User | null;
};
