import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  user: User | null,
  comment: Comment[],
}
