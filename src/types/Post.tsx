import { Comment } from '../interfaces/Comment';
import { User } from '../interfaces/User';

export type Post = {
  id:number;
  title:string;
  body:string;
  user: User | null;
  comments: Comment[];
};
