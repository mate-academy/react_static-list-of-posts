import { User } from './User';
import { Comment } from './comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FullPost extends Post {
  user?: User;
  comments: Comment[];
}
