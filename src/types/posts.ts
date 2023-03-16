import { Users } from './users';
import { Comments } from './comments';

export interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
  user: Users | null;
  comments: Comments[];
}
