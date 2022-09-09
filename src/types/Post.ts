import { User } from './User';
import { Comment } from './Comment';
import { PostFromServer } from './PostFromServer';

export interface Post extends PostFromServer {
  user: User | null,
  comments: Comment[],
}
