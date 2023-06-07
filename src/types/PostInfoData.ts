import { Post } from './post';
import { User } from './user';
import { Comment } from './Comment';

export interface PostInfoData extends Post {
  user: User | null;
  comments: Comment[];
}
