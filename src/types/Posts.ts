import { Users } from './Users';
import { Comments } from './Comments';

export interface Posts {
  id: number,
  title: string,
  body: string,
  user: Users | null;
  comments: Comments[];
}
