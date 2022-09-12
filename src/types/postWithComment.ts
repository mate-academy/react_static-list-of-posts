import { Comment } from './comment';
import { User } from './user';

export interface PostWithComment {
  userId: number;
  id: number;
  title: string;
  body: string;
  comment: Comment[];
  user: User | null;
}
