import { Comments } from './Comments';
import { User } from './User';

export interface Post {
  userId: number,
  id: number
  title: string,
  body: string,
  comments: Comments[],
  user: User | null,
}
