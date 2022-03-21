import { Users } from './Users';
import { Comments } from './Comments';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: Users | undefined;
  comments: Comments[]
}
