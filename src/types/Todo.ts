import { User } from './User';
import { Comments } from './Comments';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comments [];
}
