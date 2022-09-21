import { User } from '../types/User';
import { Comment } from '../types/Comment';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
