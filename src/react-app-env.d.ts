import { Post } from './types/post';
import { User } from './types/user';
import { Comment } from './types/comment';

export interface FullPost extends Post {
  user?: User | undefined;
  comments: Comment[]
}
