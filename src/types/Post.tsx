import { User } from './User';
import { Comment } from './Comment';
import './UserInfo.scss';

export interface Post{
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null;
  comments: Comment[] | [];
}
