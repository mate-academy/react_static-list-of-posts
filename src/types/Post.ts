import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
  comments: Comment[];
  user: User | null;
}
