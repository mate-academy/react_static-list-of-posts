import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  user: User | null;
  comments: Comment[];
  userId: number;
  id: number;
  title: string;
  body: string;
}
