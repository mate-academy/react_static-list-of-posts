import { Users } from './Users';
import { Comments } from './Comments';

export interface Posts {
  id: number,
  userId: number,
  title: string,
  body: string,
  comments: Comments[] | null,
  user: Users | null,
}
