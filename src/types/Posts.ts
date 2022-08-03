import { Comments } from './Comments';
import { Users } from './Users';

export type Posts = {
  userId: number,
  id: number,
  title: string,
  body: string
  user: Users | null,
  comments: Comments[]
};
