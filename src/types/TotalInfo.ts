import { User } from './User';
import { Comments } from './Comments';

export interface TotalInfo {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  arrayOfComments: Comments[],
}
