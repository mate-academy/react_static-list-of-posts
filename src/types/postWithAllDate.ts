import { Comment } from './comments';
import { Post } from './post';
import { User } from './user';

export interface PostWithAllDate extends Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[] | []
}
