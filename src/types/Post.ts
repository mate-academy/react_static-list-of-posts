import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PreparedPost extends Post {
  user: User | null;
  comments: Comment[];
}
