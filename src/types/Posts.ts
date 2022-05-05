import { User } from './Users';
import { Comment } from './Comments';

export interface Post {
  id: number,
  user: User | null,
  title: string,
  body: string,
  comment: Comment[] | null,
}
