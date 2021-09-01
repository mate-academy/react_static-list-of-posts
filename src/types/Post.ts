import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  user?: User;
  reviews: Comment[];
  title: string;
  body: string;
  id: number;
  userId: number;
}
