import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  user: User | null,
  title: string,
  body: string,
  id: number,
  userId: number;
  comments: Comment[],
}
