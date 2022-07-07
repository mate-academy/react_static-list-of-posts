import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export interface PreparedPost extends Post{
  user?: User,
  comments?: Comment[],
}
