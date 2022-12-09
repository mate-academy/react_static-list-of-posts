import { Comment } from './commentsTypes';
import { User } from './usersTypes';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comment[],
  user: User | null,
}
