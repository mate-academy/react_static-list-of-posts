import { User } from './typedefs';
import { Comment } from './Comment';

export interface Post {
  user?: User,
  comments: Comment[],
  userId: number,
  id: number,
  title: string,
  body: string,
}
