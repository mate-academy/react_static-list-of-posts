import { UserType } from './UserType';
import { Comment } from './Comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  userLink: UserType | null;
  commentLink: Comment[];
}
