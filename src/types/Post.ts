import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comment [] | null,
  user: User | null,
}
