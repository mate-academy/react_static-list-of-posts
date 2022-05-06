import { User } from './User';
import { Comment } from './CommentI';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comment: Comment[];
}
