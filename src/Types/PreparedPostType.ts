import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export type PreparedPostType = Post & {
  user: User | null;
  comments: Comment[];
};
