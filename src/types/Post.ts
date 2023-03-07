import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  title: string,
  body: string,
  id: number,
  user: User | null,
  comments: Comment[],
}
