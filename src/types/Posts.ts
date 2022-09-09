import { Comment } from './Comments';
import { User } from './Users';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
