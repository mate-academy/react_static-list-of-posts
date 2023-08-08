import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  user?: User;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}
