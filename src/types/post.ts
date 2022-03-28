import { User } from './user';
import { Comment } from './comment';

export type Post = {
  title: string,
  body: string,
  user: User | null;
  comments: Comment | null;
};
