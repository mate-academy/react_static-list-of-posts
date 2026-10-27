import { CommentType } from './comment';
import { User } from './user';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments?: CommentType[];
};
