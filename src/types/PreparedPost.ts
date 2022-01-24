import { Post } from './Post';
import { User } from './User';
import { TypeComment } from './TypeComment';

export interface PreparedPost extends Post {
  user: User | null;
  comments: TypeComment[];
}
