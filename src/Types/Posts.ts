import { Comments } from './Comments';
import { Users } from './Users';

export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: Users | null,
  comments: Comments[],
}
