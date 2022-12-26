import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  userId: number,
  id: number,
  title:string,
  body: string,
  comments: Comment[],
  user: User;
}
