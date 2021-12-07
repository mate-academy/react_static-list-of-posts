import { Post } from './Post';
import { Comment } from './Comment';
import { User } from './User';

export interface PreparedPosts extends Post {
  comments: Comment[],
  user: User | null,
}
