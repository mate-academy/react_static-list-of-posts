import { User } from './Users';
import { Comment } from './Comments';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface FullPost extends Post {
  user: User | null,
  comments: Comment[],
}
