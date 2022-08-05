import { User } from './users';
import { Comments } from './comments';

export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[] | null,
}
