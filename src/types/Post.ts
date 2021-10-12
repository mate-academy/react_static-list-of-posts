import { User } from './User';
import { Comment } from './Comments';

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
