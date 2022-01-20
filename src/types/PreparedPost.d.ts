import { Post } from './Post';

export interface PreparedPost extends Post {
  user: User | null;
  comments: TypeComment[];
}
