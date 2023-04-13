import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export type CompletePost = Post & {
  user: User | null;
  comments: Comment[];
};
