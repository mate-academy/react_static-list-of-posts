import { Comment } from './comment';
import { User } from './user';

export interface Post {
  body: string;
  comments: Comment[];
  id: number;
  title: string;
  user: User | undefined;
  userId: number;
}
