import { User } from './user';
import { Comment } from './comment';

export interface Post {
  user: User | undefined,
  id: number,
  title: string,
  body: string,
  comments: Comment[],
}
