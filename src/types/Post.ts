import { Comment } from './Coments';
import { User } from './User';

export interface Post {
  user: User | null;
  comments: Comment[] | null;
  userId: number;
  id: number;
  title: string;
  body: string;
}
