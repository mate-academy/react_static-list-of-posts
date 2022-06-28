import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
