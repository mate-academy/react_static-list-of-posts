import { Comment } from './comment';
import { User } from './user';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
  user: User | null;
  comments: Comment[];
}
