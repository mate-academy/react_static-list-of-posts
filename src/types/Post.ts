import { Comment } from './Comment';
import { Users } from './Users';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: Users | null,
  comments: Comment[],
}
