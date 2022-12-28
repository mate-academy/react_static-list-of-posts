import { Comments } from './comment';
import { User } from './user';

export interface PreparedPost {
  userId: number,
  id: number,
  title: string,
  body: string,
  user?: User,
  comments: Comments[],
}
