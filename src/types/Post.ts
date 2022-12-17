import type { User } from './User';
import type { Comment } from './Comment';

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User;
  comments: Comment[];
}
