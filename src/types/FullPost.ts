import { Comment } from './Comment';
import { User } from './User';

export interface FullPost {
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
