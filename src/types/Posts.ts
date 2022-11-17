import { Comments } from './Comments';
import { Users } from './Users';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comments[];
  user: Users | null;
}
