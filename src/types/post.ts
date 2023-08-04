import { User } from './user';
import { Comment as Comments } from './comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comments[] | null;
}
