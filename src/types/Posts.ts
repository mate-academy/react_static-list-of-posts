import { Comment } from './Comments';
import { User } from './Users';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User;
  comments: Comment[];
}
