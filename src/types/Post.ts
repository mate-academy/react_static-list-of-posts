import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  userName: User[];
  commentText: Comment[];
  body: string;
  title: string;
  id: number;
}
