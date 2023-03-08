import { Comment } from './comment';
import { User } from './user';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: User | null;
  comments: Comment[];
}
