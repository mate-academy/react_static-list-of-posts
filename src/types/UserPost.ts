import { User } from './User';
import { Comment } from './Comment';

export interface UserPost {
  user: User;
  postId: number;
  title: string;
  body: string;
  commentsList: Comment[] | null;
}
