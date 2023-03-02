import { Users } from './User';
import { Comments } from './Comment';

export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: Users | null;
  comments: Comments[] | [],
}
