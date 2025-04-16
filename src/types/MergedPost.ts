import { Comment } from '../types/Comment';
import { User } from '../types/User';

export interface MergedPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User;
  comments: Comment[];
}
