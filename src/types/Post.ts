import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default interface FullPost extends Post {
  user: User | null;
  comments: Comment[];
}
