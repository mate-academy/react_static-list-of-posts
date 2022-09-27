import { Comment } from './Comment';
import { Users } from './Users';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
  user: Users | null;
}
