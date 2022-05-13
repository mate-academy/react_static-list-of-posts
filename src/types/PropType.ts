import { UserType } from './UserType';
import { CommentType } from './CommentType';

export interface PropType {
  id: number,
  title: string,
  body: string,
  user: UserType | null,
  comments: CommentType[] | null,
}
