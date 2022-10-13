import { Users } from './Users';
import { Comments } from './Comments';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: Users;
  comments: Comments[];
}
