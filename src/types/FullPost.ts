import { UserType } from './User';
import { CommentType } from './Comment';

export interface FullPostType {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: UserType;
  comments: CommentType[];
}
