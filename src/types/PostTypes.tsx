import { CommentTypes } from './CommentTypes';
import { UserTypes } from './UserTypes';

export interface PostTypes {
  userId: number;
  id: number
  title: string;
  body: string;
  user: UserTypes | null;
  comments: CommentTypes[];
}
