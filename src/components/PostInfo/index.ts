export * from './PostInfo';
import { Comment } from '../CommentInfo/index';
import { User } from '../UserInfo/index';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User;
  comments: Comment[];
}
