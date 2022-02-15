import { User } from './User';
import { Comment } from './Comment';

export interface PreparedPost {
  id: number,
  title: string,
  body: string,
  user?: User,
  comments: Comment[],
}
