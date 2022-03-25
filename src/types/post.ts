import { User } from './user';
import { Comment } from './comment';

export interface Post {
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
