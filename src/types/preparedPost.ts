import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export type PreparedPost = Post & {
  author: User | null;
  comments: Comment[];
};
