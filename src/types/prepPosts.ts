import { User } from './user';
import { Comment } from './comments';

export interface PrepPost {
  user: User | null,
  comments: Comment[],
  userId: number,
  id: number,
  title: string,
  body: string,
}
