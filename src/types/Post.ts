import { Comments } from './Comments';
import { Users } from './Users';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: Users | null,
  comments: Comments[] | null,
}
