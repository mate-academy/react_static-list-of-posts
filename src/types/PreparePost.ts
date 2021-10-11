import { User } from './User';
import { Comment } from './Comment';

export interface PreparePost {
  id: number,
  title: string,
  body: string,
  user: User | null,
  commentsBox: Comment[]
}
