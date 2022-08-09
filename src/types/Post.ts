import { User } from './user';
import { Comment } from './Comment';

export interface Post {
  comments: Comment[];
  id: number,
  userId: number,
  title: string,
  body: string
  user: User | null
}
