import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  title: string;
  body: string;
  user: User | null;
  comment: Comment[];
}
