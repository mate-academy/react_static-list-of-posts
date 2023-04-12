import { Comments } from './Comments';
import { Post } from './Post';
import { User } from './User';

export type PreparedPost = Post & {
  comments: Comments[];
  user: User | null;
};
