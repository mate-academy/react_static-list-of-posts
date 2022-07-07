import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export interface Posts extends Post {
  userId: number,
  id: number,
  user: User,
  comments: Comment,
}
