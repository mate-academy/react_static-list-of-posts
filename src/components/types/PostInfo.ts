import { User } from './User';
import { Comment } from './Comment';

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null;
  comment: Comment[];
};
