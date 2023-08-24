import { User } from './User';
import { Comment } from './Comment';

export type Post = {
  user: User | null;
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comment[];
};
