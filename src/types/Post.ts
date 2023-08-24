import { Comment } from './Comment';
import { User } from './User';

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[];
};
