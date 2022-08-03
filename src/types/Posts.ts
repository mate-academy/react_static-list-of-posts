import { User } from './User';
import { Comments } from './Comments';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | undefined;
  comments: Comments[];
}
