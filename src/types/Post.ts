import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  user: User | undefined,
  comments: Comment | undefined,
  userId: number,
  id: number,
  title: string,
  body: string,
}
