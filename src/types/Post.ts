import { UserType } from './User';
import { CommentType } from './Comment';

export interface PostType {
  id: number;
  title: string;
  body: string;
  user: UserType | null;
  comments: CommentType[] | null;
}
