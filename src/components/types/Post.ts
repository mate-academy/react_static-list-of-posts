import { User } from './User';
import { Comments } from './Comments';

export interface Post {
  id: number;
  title: string;
  body: string;
  comments: Comments[] | null;
  user: User | null;
}
