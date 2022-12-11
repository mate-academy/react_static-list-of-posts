import { Users } from './Users';
import { Comment } from './Comment';

export interface Posts {
  body: string,
  title: string,
  id: number,
  user: Users[];
  comments: Comment[];
}
