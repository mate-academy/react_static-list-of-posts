import { User } from './User';
import { Comment } from './Comment';

export interface InfoPost {
  userId: number;
  id: number,
  title: string,
  body: string,
  user?: User,
  comments: Comment[],
}
