import { Comment } from './сomments';
import { User } from './users';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[] | null;
}
