import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface LinkedPost extends Post {
  user: User | null;
  comments: Comment[];
}
