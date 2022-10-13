import { Post } from './Post';
import { PostComment } from './PostComment';
import { User } from './User';

export interface PreparedPost extends Post {
  user: User | null,
  comments: PostComment[],
}
