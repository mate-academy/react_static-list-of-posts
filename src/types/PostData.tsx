import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface PostData {
  comments: Comment[],
  post: Post,
  user: User | null,
}
