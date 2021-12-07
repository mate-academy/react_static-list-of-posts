import { Post } from './Post';
import { User } from './User';
import { Comments } from './Comments';

export interface PreparedPost extends Post {
  user: User | null;
  comments: Comments[];
}
