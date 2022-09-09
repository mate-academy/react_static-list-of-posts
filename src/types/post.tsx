import { Comment } from './comments';
import { User } from './user';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comment: Comment[] | null;
  user: User | null;
}
