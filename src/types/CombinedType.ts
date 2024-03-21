import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export type CombinedType = Post & {
  user: User;
  comments: Comment[];
};
