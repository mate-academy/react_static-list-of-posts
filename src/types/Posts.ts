import { User } from './User';
import { Comments } from './Comments';

export interface Posts {
  user: User | null;
  id: number;
  title: string;
  body: string;
  comments: Comments[];
}
