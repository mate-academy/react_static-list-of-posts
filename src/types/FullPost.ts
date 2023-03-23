import { User } from './User';
import { Comment } from './Comment';

export interface FullPost {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
