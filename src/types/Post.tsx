import { User } from './User';
import { Comments } from './Comments';

export interface Post {
  title: string;
  body: string;
  comments: Comments[];
  user: User | null;
}
