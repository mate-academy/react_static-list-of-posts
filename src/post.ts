import { Comment } from './comment';
import { User } from './user';

export interface Post {
  id: number;
  title: string;
  body: string;
  comments: Comment[];
  user?: User;
}
