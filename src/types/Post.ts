import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  user: User | null,
  comments: Comment[],
  id: number,
  title: string,
  body: string
}
