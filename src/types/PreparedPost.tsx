import { Comment } from './Comments';
import { User } from './User';

export type PreparedPost = {
  userId: number;
  title: string;
  body: string;
  user: User | null;
  id: number;
  comments: Comment[]
};
