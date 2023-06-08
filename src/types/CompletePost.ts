import { Posts } from './Posts';
import { User } from './User';
import { Comments } from './Comments';

export interface CompletePost extends Posts {
  user: User | null,
  comments: Comments[],
}
