import { Comment } from './Comment';
import { User } from './User';

export type Post = {
  userId: number,
  id:number,
  title: string,
  body: string,
  comment:Comment[],
  user:User | null,
};
