import { Comments } from './Comments';
import { User } from './User';

export interface DataList {
  title: string;
  body: string;
  id: number;
  user: User | null;
  comments: Comments[];
}
