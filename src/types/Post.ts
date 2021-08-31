import { User } from './User';
import { Comment } from './Comment';

export type Post = {
  id: number,
  title: string,
  body: string,
  user: User | null;
  commentsLink: Comment[];
};
