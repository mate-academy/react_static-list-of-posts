import { User } from './user';
import { Comment } from './comment';
import { Post } from './post';

export type TotalPost = Post & {
  user: User | null;
  comments: Comment[];
};
