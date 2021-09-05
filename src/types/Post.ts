import { User } from '../types/User';
import { Comment } from '../types/Comment';

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[] | null,
}
