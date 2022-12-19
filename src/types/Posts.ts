import { Users } from './Users';
import { Comment } from './Comment';

export interface Posts {
  userId:number,
  body: string,
  title: string,
  id: number,
  user: Users | null;
  comments: Comment[];
}
