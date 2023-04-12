import { Comment } from './Comment';
import { User } from './User';
import { Post } from './Post';

export type PreparedPosts = Post & {
  user: User | null,
  comments: Comment[];
};
