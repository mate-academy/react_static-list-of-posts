import { Comments } from './Comments';
import { Users } from './Users';

export interface Posts {
  id: number,
  title: string,
  body: string,
  comments: Comments[],
  user: Users | null,
}
