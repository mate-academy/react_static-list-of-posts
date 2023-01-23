import { User } from './userType';
import { Comment } from './commentType';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
