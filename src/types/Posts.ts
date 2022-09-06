import { Comments } from './Comments';
import { User } from './User';

export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comments[] | null;
  user: User | null,
}
