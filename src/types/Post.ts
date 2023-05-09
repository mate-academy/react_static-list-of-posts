import { Users } from './Users';
import { Comment } from './Comments';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: Users | null,
  comments: Comment[],
}
