import { User } from './users';
import { Comment } from './comments';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
