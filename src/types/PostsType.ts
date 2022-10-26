import { Comment } from './CommentType';
import { User } from './UsersType';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comment[],
  user: User | null;
}
