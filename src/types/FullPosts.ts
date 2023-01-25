import { Posts } from './Posts';
import { Comments } from './Comments';
import { Users } from './Users';

export interface FullPost extends Posts {
  comments: Comments[];
  user: Users | null;
}
