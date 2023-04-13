import { UserComment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export type PreparedPost = Post & {
  user: User | null;
  comments: UserComment[];
};
