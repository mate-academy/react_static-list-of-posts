import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export type FullPost = Post & {
  user: User | undefined;
  comments: Comment[];
};
