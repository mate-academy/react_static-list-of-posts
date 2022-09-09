import { User } from './users';
import { Comment } from './comments';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[] | null;
  user: User | null;
}
