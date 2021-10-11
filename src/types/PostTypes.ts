import { UserTypes } from './UserTypes';
import { CommentTypes } from './CommentTypes';

export interface PostTypes {
  userId: number,
  id: number,
  body: string;
  title: string;
  user: UserTypes | null,
  comments: CommentTypes[],
}
