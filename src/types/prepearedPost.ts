import { Comments } from './comment';
import { Post } from './post';
import { User } from './user';

export interface PreparedPost extends Post {
  user?: User;
  comments: Comments[];
}
