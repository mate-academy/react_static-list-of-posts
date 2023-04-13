import { Comment } from './Comment';
import { User } from './User';
import { Post } from './Post';

export type PreparedPost = Post & {
  user: User | null,
  comments: Comment[];
};
