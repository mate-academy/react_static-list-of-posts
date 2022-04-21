import { Users } from './users';
import { Comments } from './comments';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: Users;
  comments: Comments [];
}
