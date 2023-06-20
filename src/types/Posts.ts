import { Comments } from './Comments';
import { User } from './User';

export interface Posts {
  id: number,
  userId: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[],
}
