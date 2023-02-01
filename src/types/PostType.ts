import { CommentType } from './CommentType';
import { UserType } from './UserType';

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: UserType | null;
  comments: CommentType[];
}
