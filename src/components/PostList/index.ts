export * from './PostList';
import { User } from '../UserInfo/index';
import { Comment } from '../CommentInfo/index';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments?: Comment[];
};
