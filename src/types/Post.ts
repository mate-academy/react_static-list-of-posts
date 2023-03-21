import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  user: User | null;
  comments: Comment[];
}
