import { Comments } from './Comments';
import { User } from './User';

export type Posts = {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[] | [];
};
