import { Users } from './Users';
import { Comment } from './Comment';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: Users | null;
  comments: Comment[];
}
