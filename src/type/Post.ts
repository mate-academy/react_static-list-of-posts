import { User } from './User';
import { Comment } from './Commet';

export interface Post {
  userId: number;
  id: number;
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
