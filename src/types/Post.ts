import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  userId: number,
  id: number,
  body: string,
  title: string,
  user: User,
  comments: Comment[],
}
