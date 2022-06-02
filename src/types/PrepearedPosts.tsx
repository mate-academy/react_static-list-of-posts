import { Comments } from './Comments';
import { Posts } from './Posts';
import { Users } from './Users';

export interface PrepearedPost extends Posts{
  user? : Users;
  comment : Comments[];
}
