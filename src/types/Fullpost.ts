import { User } from './User';
import { Comment } from './Comment';
import { Post } from './Post';

export interface Fullpost extends Post {
  author?: User,
  comments: Comment[],
}
