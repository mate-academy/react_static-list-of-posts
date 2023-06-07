import { Comments } from './Comments';
import { Posts } from './Posts';
import { Users } from './Users';

export interface Post extends Posts {
  user?: Users;
  comments: Comments[];
}
