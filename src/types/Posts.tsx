import { User } from './User';
import { Comments } from './Comments';

export interface Posts {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comments[];
}
