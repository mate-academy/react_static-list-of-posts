import { User } from './User';
import { Comment } from './Comment';
import { Post } from './Post';

export interface PostTodo {
  user: User,
  post: Post | null,
  comment: Comment[] | [],
}
