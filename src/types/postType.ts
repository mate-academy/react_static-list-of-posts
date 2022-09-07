import { Comment } from './commentType';
import { User } from './userType';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User | null;
  comments: Comment[];
}
