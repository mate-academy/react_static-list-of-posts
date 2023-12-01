import { User } from './UserTypes';
import { Comment } from './CommentsTypes';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
