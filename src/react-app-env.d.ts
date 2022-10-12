import { Comment } from './types/Comment';
import { User } from './types/User';

export interface FullPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
