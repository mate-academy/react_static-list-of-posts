import { User } from './User';
import { Comments } from './comments';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FullPost extends Posts {
  user?: User;
  comments: Comments[];
}
