import { User } from './User';
import { Comment } from './Comment';

export interface Post{
  id: number;
  title: string;
  body: string;
  user: User;
  comments: Comment[];
}
