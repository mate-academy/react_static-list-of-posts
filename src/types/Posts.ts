import { Comment } from './Comments';
import { User } from './Users';

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
  user: User | null,
  comments: Comment[]
};
