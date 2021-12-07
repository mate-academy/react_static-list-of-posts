import { User } from './User';
import { Comment } from './Comments';

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  user?: User,
  comments: Comment[],
}
