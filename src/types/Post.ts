import { User } from '../types/User';
import { Comment } from '../types/Comment';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comment[] | null,
  user: User | null,
}
