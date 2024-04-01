import { type Comment } from './Comment';
import { type User } from './User';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments: Comment[];
}
