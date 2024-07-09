import { Comment } from './comments';
import { User } from './User';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
  user: User;
};
