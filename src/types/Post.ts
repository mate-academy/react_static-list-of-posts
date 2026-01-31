import { type User } from './User';
import { type Comment } from './Comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments?: Comment[];
}
